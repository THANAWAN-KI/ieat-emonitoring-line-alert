from pathlib import Path
import re

path = Path("/mnt/data/check_emonitoring.py")
code = path.read_text(encoding="utf-8")

# Add state path after STATUS_FILE
code = code.replace(
    'STATUS_FILE = Path("docs/status.json")\n',
    'STATUS_FILE = Path("docs/status.json")\nALERT_STATE_FILE = Path("docs/alert_state.json")\n'
)

# Insert state/event functions before LINE Flex helpers
marker = "# ============================================================\n# LINE Flex helpers\n# ============================================================\n"

state_functions = r'''# ============================================================
# Alert state / Event-based notification
# ============================================================

def station_key(station: dict[str, Any]) -> str:
    """
    ใช้ Code เป็นตัวระบุสถานี ถ้าไม่มีให้ fallback เป็นชื่อสถานี
    """
    code = safe_text(station.get("code"), "")
    if code and code != "-":
        return code

    return safe_text(
        station.get("station_name"),
        "UNKNOWN"
    )


def station_snapshot(
    station: dict[str, Any]
) -> dict[str, Any]:
    """
    เก็บเฉพาะข้อมูลที่จำเป็นสำหรับเปรียบเทียบวันก่อน/วันนี้
    """
    return {
        "station_name":
            safe_text(station.get("station_name")),
        "estate_name":
            safe_text(station.get("estate_name")),
        "station_type":
            safe_text(station.get("station_type")),
        "status":
            safe_text(station.get("status")).upper(),
        "parameter_alarm":
            full_text(station.get("parameter_alarm"), ""),
        "comment":
            full_text(station.get("comment"), ""),
        "latitude":
            station.get("latitude"),
        "longitude":
            station.get("longitude"),
    }


def load_alert_state() -> dict[str, Any]:
    if not ALERT_STATE_FILE.exists():
        return {
            "version": 1,
            "updated_at": None,
            "stations": {},
        }

    try:
        with ALERT_STATE_FILE.open(
            "r",
            encoding="utf-8"
        ) as file:
            data = json.load(file)

        if not isinstance(data, dict):
            raise ValueError("state ไม่ใช่ object")

        stations = data.get("stations", {})
        if not isinstance(stations, dict):
            stations = {}

        return {
            "version": data.get("version", 1),
            "updated_at": data.get("updated_at"),
            "stations": stations,
        }

    except (
        OSError,
        json.JSONDecodeError,
        ValueError,
    ) as error:

        print(
            "WARNING: อ่าน alert_state.json ไม่ได้ "
            f"({error}) -> เริ่ม state ใหม่"
        )

        return {
            "version": 1,
            "updated_at": None,
            "stations": {},
        }


def save_alert_state(
    all_stations: list[dict[str, Any]]
) -> None:

    station_states: dict[str, Any] = {}

    for station in all_stations:
        station_states[
            station_key(station)
        ] = station_snapshot(station)

    state = {
        "version": 1,
        "updated_at":
            now_thailand().isoformat(),
        "stations":
            station_states,
    }

    ALERT_STATE_FILE.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    temp_file = ALERT_STATE_FILE.with_suffix(
        ".json.tmp"
    )

    with temp_file.open(
        "w",
        encoding="utf-8"
    ) as file:
        json.dump(
            state,
            file,
            ensure_ascii=False,
            indent=2
        )

    temp_file.replace(
        ALERT_STATE_FILE
    )


def alarm_level_from_snapshot(
    snapshot: dict[str, Any]
) -> str:

    parameters = split_alarm_items(
        snapshot.get(
            "parameter_alarm",
            ""
        )
    )

    count = len(parameters)

    if count >= 3:
        return "เกินค่ามาตรฐาน"

    if count == 2:
        return "เฝ้าระวัง"

    if count == 1:
        return "ติดตามสถานการณ์"

    return "ปกติ"


def alarm_level_from_station(
    station: dict[str, Any]
) -> str:

    return get_station_severity(
        station
    )["title"]


def build_event_station(
    station: dict[str, Any],
    event_type: str,
    reason: str,
    previous: dict[str, Any] | None = None,
) -> dict[str, Any]:

    result = dict(station)
    result["event_type"] = event_type
    result["event_reason"] = reason
    result["previous_snapshot"] = previous or {}
    return result


def detect_notification_events(
    previous_state: dict[str, Any],
    all_stations: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """
    แจ้งเฉพาะเหตุการณ์ที่เปลี่ยนจากรอบก่อน

    1) NEW_ALARM:
       สถานีที่เดิมไม่มี alarm -> วันนี้มี alarm

    2) ALARM_CHANGED:
       ParameterAlram เปลี่ยน

    3) SEVERITY_UP:
       ระดับสูงขึ้น เช่น เฝ้าระวัง -> เกินค่ามาตรฐาน

    4) SEVERITY_DOWN:
       ระดับลดลง แต่ยังมี alarm

    5) RECOVERED:
       มี alarm -> วันนี้กลับปกติ

    6) OFFLINE:
       ONLINE -> OFFLINE

    7) ONLINE:
       OFFLINE -> ONLINE

    ไม่ส่งซ้ำทุกวันถ้าข้อมูลเหมือนเดิม
    """

    previous_stations = previous_state.get(
        "stations",
        {}
    )

    if not isinstance(
        previous_stations,
        dict
    ):
        previous_stations = {}

    events: list[dict[str, Any]] = []

    # --------------------------------------------------------
    # เปรียบเทียบทุกสถานีที่มีอยู่วันนี้
    # --------------------------------------------------------

    for station in all_stations:

        key = station_key(station)

        current = station_snapshot(
            station
        )

        previous = previous_stations.get(
            key
        )

        current_alarm = bool(
            current.get(
                "parameter_alarm",
                ""
            ).strip()
        )

        current_status = current.get(
            "status",
            ""
        ).upper()

        if previous is None:

            # รอบแรก: แจ้งเฉพาะสถานีที่มี Alarm
            # ไม่แจ้งทุกสถานีเป็นจำนวนมหาศาล
            if current_alarm:

                events.append(
                    build_event_station(
                        station,
                        "NEW_ALARM",
                        "พบค่าพารามิเตอร์แจ้งเตือนใหม่",
                        None,
                    )
                )

            continue

        previous_alarm = bool(
            str(
                previous.get(
                    "parameter_alarm",
                    ""
                )
            ).strip()
        )

        previous_status = str(
            previous.get(
                "status",
                ""
            )
        ).upper()

        previous_level = alarm_level_from_snapshot(
            previous
        )

        current_level = alarm_level_from_snapshot(
            current
        )

        # ----------------------------------------------------
        # Alarm: ไม่มี -> มี
        # ----------------------------------------------------

        if (
            not previous_alarm
            and current_alarm
        ):

            events.append(
                build_event_station(
                    station,
                    "NEW_ALARM",
                    "พบค่าพารามิเตอร์แจ้งเตือนใหม่",
                    previous,
                )
            )

        # ----------------------------------------------------
        # Alarm: มี -> ไม่มี = กลับปกติ
        # ----------------------------------------------------

        elif (
            previous_alarm
            and not current_alarm
        ):

            events.append(
                build_event_station(
                    station,
                    "RECOVERED",
                    "ค่าพารามิเตอร์กลับสู่ภาวะปกติ",
                    previous,
                )
            )

        # ----------------------------------------------------
        # Alarm: เปลี่ยนรายการ
        # ----------------------------------------------------

        elif (
            previous_alarm
            and current_alarm
            and (
                previous.get(
                    "parameter_alarm",
                    ""
                )
                != current.get(
                    "parameter_alarm",
                    ""
                )
            )
        ):

            if (
                current_level
                != previous_level
            ):

                if current_level == "เกินค่ามาตรฐาน":

                    events.append(
                        build_event_station(
                            station,
                            "SEVERITY_UP",
                            (
                                "ระดับการแจ้งเตือนสูงขึ้น: "
                                f"{previous_level} → "
                                f"{current_level}"
                            ),
                            previous,
                        )
                    )

                else:

                    events.append(
                        build_event_station(
                            station,
                            "SEVERITY_DOWN",
                            (
                                "ระดับการแจ้งเตือนเปลี่ยน: "
                                f"{previous_level} → "
                                f"{current_level}"
                            ),
                            previous,
                        )
                    )

            else:

                events.append(
                    build_event_station(
                        station,
                        "ALARM_CHANGED",
                        "รายการ ParameterAlram เปลี่ยนแปลง",
                        previous,
                    )
                )

        # ----------------------------------------------------
        # ONLINE -> OFFLINE
        # ----------------------------------------------------

        if (
            previous_status == "ONLINE"
            and current_status == "OFFLINE"
        ):

            events.append(
                build_event_station(
                    station,
                    "OFFLINE",
                    "สถานีเปลี่ยนสถานะจาก ONLINE เป็น OFFLINE",
                    previous,
                )
            )

        # ----------------------------------------------------
        # OFFLINE -> ONLINE
        # ----------------------------------------------------

        elif (
            previous_status == "OFFLINE"
            and current_status == "ONLINE"
        ):

            events.append(
                build_event_station(
                    station,
                    "ONLINE",
                    "สถานีกลับมา ONLINE",
                    previous,
                )
            )

    # --------------------------------------------------------
    # สถานีหายไปจากข้อมูล
    #
    # ไม่แจ้งว่า OFFLINE เพราะอาจเป็น API/ข้อมูลขัดข้อง
    # เพื่อป้องกัน False Alarm
    # --------------------------------------------------------

    return events


def event_priority(
    event_type: str
) -> int:

    priorities = {
        "SEVERITY_UP": 1,
        "NEW_ALARM": 2,
        "OFFLINE": 3,
        "ALARM_CHANGED": 4,
        "SEVERITY_DOWN": 5,
        "ONLINE": 6,
        "RECOVERED": 7,
    }

    return priorities.get(
        event_type,
        99
    )


def event_icon_url(
    event: dict[str, Any]
) -> str:

    event_type = event.get(
        "event_type",
        ""
    )

    if event_type == "RECOVERED":
        return FOLLOW_ICON_URL

    if event_type == "ONLINE":
        return FOLLOW_ICON_URL

    if event_type == "OFFLINE":
        return WATCH_ICON_URL

    if event_type == "SEVERITY_UP":
        return HIGH_ICON_URL

    if event_type == "SEVERITY_DOWN":
        return WATCH_ICON_URL

    return HIGH_ICON_URL


def event_title(
    event: dict[str, Any]
) -> str:

    titles = {
        "NEW_ALARM":
            "🔴 พบการแจ้งเตือนใหม่",

        "SEVERITY_UP":
            "🔴 ระดับการแจ้งเตือนสูงขึ้น",

        "ALARM_CHANGED":
            "🟠 รายการแจ้งเตือนเปลี่ยนแปลง",

        "SEVERITY_DOWN":
            "🟠 ระดับการแจ้งเตือนลดลง",

        "OFFLINE":
            "🟠 สถานี OFFLINE",

        "ONLINE":
            "🟢 สถานีกลับมา ONLINE",

        "RECOVERED":
            "🟢 สถานการณ์กลับสู่ปกติ",
    }

    return titles.get(
        event.get("event_type", ""),
        "แจ้งเตือนการเปลี่ยนแปลง"
    )


def event_color(
    event: dict[str, Any]
) -> str:

    event_type = event.get(
        "event_type",
        ""
    )

    if event_type in {
        "RECOVERED",
        "ONLINE",
    }:
        return "#2B8A3E"

    if event_type in {
        "OFFLINE",
        "SEVERITY_DOWN",
    }:
        return "#E67700"

    return "#C51F35"


# ============================================================
# Event summary bubble
# ============================================================

def build_event_summary_bubble(
    events: list[dict[str, Any]]
) -> dict[str, Any]:

    sorted_events = sorted(
        events,
        key=lambda event:
            event_priority(
                event.get(
                    "event_type",
                    ""
                )
            )
    )

    new_alarm_count = sum(
        1 for e in events
        if e.get("event_type")
        == "NEW_ALARM"
    )

    severity_up_count = sum(
        1 for e in events
        if e.get("event_type")
        == "SEVERITY_UP"
    )

    offline_count = sum(
        1 for e in events
        if e.get("event_type")
        == "OFFLINE"
    )

    recovered_count = sum(
        1 for e in events
        if e.get("event_type")
        == "RECOVERED"
    )

    online_count = sum(
        1 for e in events
        if e.get("event_type")
        == "ONLINE"
    )

    changed_count = sum(
        1 for e in events
        if e.get("event_type")
        == "ALARM_CHANGED"
    )

    body_contents: list[dict[str, Any]] = [

        {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "9px",
            "backgroundColor": "#F8F4FB",
            "borderColor": "#DCCBEA",
            "borderWidth": "1px",
            "cornerRadius": "9px",
            "contents": [
                text_component(
                    "มีการเปลี่ยนแปลงที่ต้องติดตาม",
                    size="sm",
                    color="#4E1478",
                    weight="bold",
                    align="center",
                ),
                text_component(
                    (
                        f"{len(events)} เหตุการณ์ "
                        "จากรอบตรวจสอบล่าสุด"
                    ),
                    size="xxs",
                    color="#777777",
                    margin="xs",
                    align="center",
                ),
            ],
        },

        {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "spacing": "xs",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#FFF1F3",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(
                                new_alarm_count
                                + severity_up_count
                            ),
                            size="lg",
                            color="#C51F35",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "Alarm ใหม่/รุนแรงขึ้น",
                            size="xxs",
                            color="#777777",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#FFF8E8",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(
                                offline_count
                                + changed_count
                            ),
                            size="lg",
                            color="#E67700",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "เฝ้าติดตาม",
                            size="xxs",
                            color="#777777",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#F1F8F3",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(
                                recovered_count
                                + online_count
                            ),
                            size="lg",
                            color="#2B8A3E",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "กลับปกติ",
                            size="xxs",
                            color="#777777",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
            ],
        },

        text_component(
            "เหตุการณ์",
            size="sm",
            color="#30283A",
            weight="bold",
            margin="sm",
        ),
    ]

    # แสดงรายการเหตุการณ์แบบสั้น
    # เพื่อไม่ให้ Summary ใหญ่เกินไป
    for event in sorted_events[:12]:

        title = event_title(event)
        color = event_color(event)

        body_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "xs",
            "paddingAll": "6px",
            "backgroundColor": "#F8F9FA",
            "cornerRadius": "7px",
            "alignItems": "center",
            "contents": [
                image_component(
                    event_icon_url(event),
                    size="xxs",
                ),
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "xs",
                    "flex": 1,
                    "contents": [
                        text_component(
                            title,
                            size="xxs",
                            color=color,
                            weight="bold",
                        ),
                        text_component(
                            safe_text(
                                event.get(
                                    "station_name"
                                )
                            ),
                            size="xxs",
                            color="#30283A",
                            margin="xs",
                            wrap=True,
                        ),
                    ],
                },
            ],
        })

    if len(sorted_events) > 12:
        body_contents.append(
            text_component(
                (
                    f"และอีก "
                    f"{len(sorted_events) - 12} "
                    "เหตุการณ์ ดูรายละเอียดใน Dashboard"
                ),
                size="xxs",
                color="#777777",
                margin="xs",
                align="center",
            )
        )

    body_contents.append({
        "type": "box",
        "layout": "vertical",
        "margin": "sm",
        "paddingAll": "7px",
        "backgroundColor": "#F8F9FA",
        "cornerRadius": "7px",
        "contents": [
            text_component(
                "ตรวจสอบล่าสุด",
                size="xxs",
                color="#6C757D",
            ),
            text_component(
                report_time_text(),
                size="xxs",
                color="#30283A",
                weight="bold",
                margin="xs",
            ),
        ],
    })

    return {
        "type": "bubble",
        "size": "mega",
        "styles": {
            "header": {
                "backgroundColor": "#FFFFFF"
            },
            "body": {
                "backgroundColor": "#FFFFFF"
            },
            "footer": {
                "backgroundColor": "#FFFFFF"
            },
        },
        "header": build_header(
            "แจ้งเตือนเฉพาะเหตุการณ์"
        ),
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "7px",
            "paddingStart": "12px",
            "paddingEnd": "12px",
            "contents": body_contents,
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "9px",
            "paddingStart": "12px",
            "paddingEnd": "12px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "color": "#4E1478",
                    "action": {
                        "type": "uri",
                        "label": "เปิด Dashboard",
                        "uri": DASHBOARD_URL,
                    },
                },
            ],
        },
    }


'''

code = code.replace(
    marker,
    state_functions + marker
)

# Replace send_report with event-based version
start = code.index("def send_report(")
end = code.index("\n\n# ============================================================\n# Main", start)

new_send_report = r'''def send_event_report(
    events: list[dict[str, Any]]
) -> bool:
    """
    ส่ง LINE เฉพาะเมื่อมีเหตุการณ์เปลี่ยนแปลง
    ไม่มีเหตุการณ์ = ไม่ส่ง LINE เลย
    """

    if not events:
        print(
            "ไม่พบการเปลี่ยนแปลงที่ต้องแจ้ง LINE"
        )
        print(
            "ประหยัดโควตา: 0 ข้อความ"
        )
        return True

    messages: list[dict[str, Any]] = []

    # Summary 1 message
    summary_bubble = (
        build_event_summary_bubble(events)
    )

    summary_message = make_flex_message(
        summary_bubble,
        (
            "IEAT e-Monitoring: "
            f"พบการเปลี่ยนแปลง {len(events)} เหตุการณ์"
        ),
    )

    summary_size = json_size_bytes(
        summary_message
    )

    if summary_size > MAX_FLEX_BYTES:
        raise RuntimeError(
            "Event Summary มีขนาดเกิน "
            f"{MAX_FLEX_BYTES / 1024:.0f} KB"
        )

    messages.append(
        summary_message
    )

    # Detail เฉพาะสถานีที่มีเหตุการณ์
    # ไม่ส่งสถานี Alarm เดิมที่ไม่มีการเปลี่ยนแปลง
    detail_stations = [
        event
        for event in events
        if event.get(
            "event_type"
        ) != "RECOVERED"
        or event.get(
            "previous_snapshot"
        )
    ]

    detail_messages = (
        build_detail_carousels(
            detail_stations
        )
        if detail_stations
        else []
    )

    messages.extend(
        detail_messages
    )

    print(
        f"เหตุการณ์ที่ต้องแจ้ง: "
        f"{len(events)}"
    )

    print(
        f"LINE messages ที่จะส่ง: "
        f"{len(messages)}"
    )

    success = send_line_messages(
        messages
    )

    if success:
        print(
            "ส่ง LINE สำเร็จ "
            "และสามารถบันทึกสถานะรอบนี้ได้"
        )
    else:
        print(
            "ส่ง LINE ไม่สำเร็จ "
            "จะยังไม่บันทึก state ใหม่ "
            "เพื่อให้รอบถัดไป retry"
        )

    return success
'''

code = code[:start] + new_send_report + code[end:]

# Replace main function entirely from def main to EOF
main_start = code.index("def main() -> int:")
main_new = r'''def main() -> int:

    print("=" * 72)
    print(
        "IEAT e-Monitoring LINE Alert "
        "v5 - Event Based / Quota Saver"
    )
    print("=" * 72)

    print(
        "เวลาประเทศไทย: "
        f"{report_time_text()}"
    )

    print(
        "กำลังดาวน์โหลดข้อมูล e-Monitoring..."
    )

    if ASSET_BASE_URL:
        print(
            "Asset URL: "
            f"{ASSET_BASE_URL}"
        )
    else:
        print(
            "WARNING: ไม่พบ Asset URL"
        )

    try:
        payload = download_station_data()
    except RuntimeError as error:
        print(
            f"ERROR: {error}"
        )
        return 1

    features = get_features(payload)

    all_stations = prepare_stations(
        features
    )

    alert_stations = filter_alert_features(
        features
    )

    type_stats = calculate_type_stats(
        all_stations
    )

    total_count = len(
        all_stations
    )

    online_total = sum(
        v["online"]
        for v in type_stats.values()
    )

    offline_total = sum(
        v["offline"]
        for v in type_stats.values()
    )

    print(
        f"จำนวนสถานีทั้งหมด: "
        f"{total_count}"
    )

    print(
        f"ONLINE ทั้งหมด: "
        f"{online_total}"
    )

    print(
        f"OFFLINE ทั้งหมด: "
        f"{offline_total}"
    )

    print(
        "สถานีที่มี ParameterAlram: "
        f"{len(alert_stations)}"
    )

    # --------------------------------------------------------
    # State comparison
    # --------------------------------------------------------

    previous_state = load_alert_state()

    print(
        "State เดิมมีสถานี: "
        f"{len(previous_state.get('stations', {}))}"
    )

    events = detect_notification_events(
        previous_state,
        all_stations,
    )

    # --------------------------------------------------------
    # Debug events
    # --------------------------------------------------------

    if events:

        print(
            f"พบเหตุการณ์ที่ต้องแจ้ง: "
            f"{len(events)}"
        )

        for event in sorted(
            events,
            key=lambda item:
                event_priority(
                    item.get(
                        "event_type",
                        ""
                    )
                )
        ):

            print("-" * 60)

            print(
                "Event:",
                event.get(
                    "event_type"
                )
            )

            print(
                "สถานี:",
                event.get(
                    "station_name"
                )
            )

            print(
                "เหตุผล:",
                event.get(
                    "event_reason"
                )
            )

            print(
                "ParameterAlram:",
                event.get(
                    "parameter_alarm"
                )
            )

            print(
                "Comment:",
                event.get(
                    "comment"
                )
            )

    else:

        print(
            "ไม่พบเหตุการณ์ใหม่หรือการเปลี่ยนแปลง"
        )

    # --------------------------------------------------------
    # Dashboard status:
    # อัปเดตทุกวัน ไม่กินโควตา LINE
    # --------------------------------------------------------

    write_status_file(
        all_stations=all_stations,
        alert_stations=alert_stations,
        type_stats=type_stats,
    )

    # --------------------------------------------------------
    # LINE:
    # ส่งเฉพาะเมื่อมี event
    # --------------------------------------------------------

    if not events:

        # เมื่อไม่มี event เราสามารถบันทึก state ได้ทันที
        # เพื่อให้วันต่อไปเปรียบเทียบกับข้อมูลล่าสุด
        save_alert_state(
            all_stations
        )

        print(
            "Dashboard อัปเดตแล้ว"
        )

        print(
            "LINE: ไม่ส่ง "
            "(ไม่มีการเปลี่ยนแปลง)"
        )

        print(
            "โควตารอบนี้: 0 ข้อความ"
        )

        print("=" * 72)

        return 0

    try:

        success = send_event_report(
            events
        )

    except RuntimeError as error:

        print(
            f"ERROR: {error}"
        )

        return 1

    if not success:

        print(
            "ERROR: ส่ง LINE ไม่สำเร็จ"
        )

        # ไม่ save state เพื่อให้ retry รอบถัดไป
        return 1

    # สำคัญ:
    # save state หลัง LINE สำเร็จเท่านั้น
    save_alert_state(
        all_stations
    )

    print(
        "บันทึก alert_state.json แล้ว"
    )

    print(
        "Dashboard อัปเดตแล้ว"
    )

    print("=" * 72)
    print(
        "ทำงานสำเร็จ: "
        "Dashboard update + Event notification"
    )
    print("=" * 72)

    return 0


if __name__ == "__main__":
    sys.exit(main())
'''

code = code[:main_start] + main_new

# Make recovered station detail show previous alarm instead of blank
# Keep current station detail but parameter may be blank; replace with previous alarm fallback.
code = code.replace(
    'parameter_alarm = full_text(\n        station.get("parameter_alarm")\n    )',
    'parameter_alarm = full_text(\n        station.get("parameter_alarm")\n        or station.get("previous_snapshot", {}).get("parameter_alarm")\n    )'
)

path.write_text(code, encoding="utf-8")

print("อัปเดตไฟล์เป็นระบบ Event-Based Notification เรียบร้อย")
print(f"ไฟล์: {path}")
print(f"ขนาด: {path.stat().st_size / 1024:.1f} KB")

# DSS API proxy (Cloudflare Worker)

This worker is **not deployed** automatically. It avoids placing the DSS API key in public GitHub Pages HTML.

## Setup

1. In Cloudflare Dashboard, open Workers & Pages → Create → Worker, then paste the contents of `worker.js` and deploy.
2. In Worker Settings → Variables and Secrets, add **Secret** `DSS_API_KEY` with a **newly rotated** DSS key (do not reuse a key shared in chat).
3. Add **Secret** `DASHBOARD_ACCESS_TOKEN` with a separate strong random token for authorized dashboard operators. This is **not** the DSS API key.
4. Add **Text** variable `ALLOWED_ORIGIN` = `https://thanawan-ki.github.io`.
5. Check with DSS administrators how API keys must be sent. Default is `Authorization: Bearer <key>`. If they specify `X-API-Key: <key>`, set text variables `DSS_AUTH_HEADER=X-API-Key` and `DSS_AUTH_PREFIX=` (empty).
6. To test the Worker from an authorized client, send `GET https://YOUR-WORKER.workers.dev/api/v1/documents/REAL_CID` with `Authorization: Bearer <DASHBOARD_ACCESS_TOKEN>`.

## Important security notes

- CORS alone does not restrict access; the separate dashboard access token is required.
- Do not embed either secret or dashboard access token in HTML/JavaScript or commit them to GitHub.
- A production multiuser application should use proper user login / Cloudflare Access, not distribute a shared access token.
- Responses may contain sensitive documents: do not log or publicly cache them. Review DSS access permissions before exposing data.
- The DSS API's exact authentication header and the meaning of CID have **not** been confirmed. A 401/403/502 means further configuration or endpoint verification is needed.
- The public `dss.html` currently has a basic CID lookup but does not have an operator login UI for the protected Worker. That integration remains to be done after Worker deployment.

const dataMenu = document.querySelector('.data-menu');
dataMenu.addEventListener('click', event => {
  if (event.target.closest('a')) dataMenu.open = false;
});
document.addEventListener('click', event => {
  if (!dataMenu.contains(event.target)) dataMenu.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dataMenu.open) {
    dataMenu.open = false;
    dataMenu.querySelector('summary').focus();
  }
});

const languageButtons = document.querySelectorAll('[data-lang]');
const translatedText = [...document.querySelectorAll('[data-en]')].map(node => [node, node.textContent]);
function setLanguage(language) {
  document.documentElement.lang = language;
  for (const [node, thaiText] of translatedText) {
    node.textContent = language === 'en' ? node.dataset.en : thaiText;
  }
  for (const button of languageButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  }
}
let storedLanguage;
try { storedLanguage = localStorage.getItem('emcc-home-language'); } catch {}
setLanguage(storedLanguage === 'en' ? 'en' : 'th');
for (const button of languageButtons) {
  button.addEventListener('click', () => {
    const language = button.dataset.lang;
    if (document.documentElement.lang === language) return;
    setLanguage(language);
    try { localStorage.setItem('emcc-home-language', language); } catch {}
    if (selectedWeatherArea) showWeather(selectedWeatherArea);
  });
}

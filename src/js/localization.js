import languages from './locales/index';

const language = document.querySelector('.language');
if (language) {
  const currentLang = language.querySelector('.lang-title');
  const languageButtons = language.querySelectorAll('.lang-buttons button');

  const changeLanguages = () => {
    const ln = localStorage.getItem('lang') || 'ru';
    const languageKeys = !languages[ln] ? languages.ru : languages[ln];

    Object.keys(languageKeys).forEach((key) => {
      const items = [...document.querySelectorAll(`[data-ln=${key}]`)];
      if (!languageKeys[key] || !items.length) return;
      items.forEach((item) => {
        if (item.tagName === 'TEXTAREA' || item.tagName === 'INPUT') {
          item.setAttribute('placeholder', languageKeys[key]);
        } else {
          item.innerHTML = languageKeys[key];
        }
      });
    });

    languageButtons.forEach((languageButton) => {
      if (languageButton.dataset.key === ln) {
        currentLang.textContent = languageButton.textContent;
        languageButton.classList.add('active');
      } else {
        languageButton.classList.remove('active');
      }
    });
  };

  document.addEventListener('click', (event) => {
    if (event.target.closest('.language')) return;
    language.classList.remove('opened');
  });

  currentLang.addEventListener('click', () => {
    language.classList.toggle('opened');
  });

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('lang', button.dataset.key);
      changeLanguages();
      language.classList.remove('opened');
    });
  });

  if (localStorage.getItem('lang') !== 'uz') {
    changeLanguages();
  }
}

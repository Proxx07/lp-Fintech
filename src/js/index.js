/* Main entrypoint js */
import './smoothScroll.js';
import './localization.js';
import burgerMenu from './burgerMenu.js';

burgerMenu();

const langButton = document.querySelector('.language');
const langDropDown = langButton?.querySelector('.dropdown');

langButton?.addEventListener('click', () => {
  langDropDown.classList.toggle('opened');
});

const decisions = document.querySelector('.decisions');
const orderedItems = decisions.querySelectorAll('.ordered-list');
orderedItems.forEach((i, index) => {
  const originText = i.innerText;

  i.innerText = `${index < 10 ? 0 : ''}${index + 1} ${originText}`;
});

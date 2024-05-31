/* Main entrypoint js */
import './smoothScroll.js';
import './localization.js';
import './popup.js';
import burgerMenu from './burgerMenu.js';

burgerMenu();

const headerHeight = document.querySelector('header.header')?.clientHeight;
document.body.style.setProperty('--header-height', `${headerHeight}px`);

const integrations = document.querySelectorAll('.integration');
if (integrations) {
  integrations.forEach((item) => {
    const listWrapper = item.querySelector('.list');
    listWrapper.style.setProperty('--count', listWrapper.querySelectorAll('.list-item').length);
  });
}

const circles = document.querySelectorAll('.circle-lined');
if (circles) {
  circles.forEach((circle) => {
    circle.innerHTML = `<span></span><span></span><span></span>`;
  });
}

const accordion = document.querySelector('.accordion');
const accordionItems = accordion?.querySelectorAll('input[name="accordion"]');
if (accordionItems) {
  accordionItems.forEach((item, index) => {
    item.addEventListener('change', () => {
      accordionItems.forEach((el, idx) => {
        if (idx !== index) el.checked = false;
      });
    });
  });
}

const partners = document.querySelector('.partners');
if (partners) {
  const listWrapper = partners.querySelectorAll('.partner-items-wrap');

  listWrapper?.forEach((wrap) => {
    const list = wrap.querySelector('.partners-list');
    list.classList.toggle('reverse', wrap.hasAttribute('data-reverse'));
    const innerClone = list.cloneNode(true);
    wrap.appendChild(innerClone);
    wrap.appendChild(innerClone);
    wrap.classList.add('marquee');
  });
}

/* Main entrypoint js */
import './smoothScroll.js';
import './localization.js';
import burgerMenu from './burgerMenu.js';

burgerMenu();

const headerHeight = document.querySelector('header.header')?.clientHeight;
document.body.style.setProperty('--header-height', `${headerHeight}px`);

// const decisions = document.querySelector('.decisions');
// const orderedItems = decisions.querySelectorAll('.ordered-list');
// orderedItems.forEach((i, index) => {
//   const originText = i.innerText;
//   i.innerText = `${index < 10 ? 0 : ''}${index + 1} ${originText}`;
// });

const integrations = document.querySelectorAll('.integration');
if (integrations) {
  integrations.forEach((item) => {
    const listWrapper = item.querySelector('.list');
    listWrapper.style.setProperty(
      '--count',
      listWrapper.querySelectorAll('.list-item').length
    );
  });
}

const circles = document.querySelectorAll('.circle-lined');
if (circles) {
  circles.forEach((circle) => {
    circle.innerHTML = `<span></span><span></span><span></span>`;
  });
}

/* Main entrypoint js */
// import testingImport from './someModule';
// const asyncModule = import('./asyncModule');
// console.log('ENV', process.env.NODE_ENV);
// console.log(testingImport);
// asyncModule.then(({ sum }) => {
//   console.log('sum', sum(22, 20));
// });
import './smoothScroll.js';

const langButton = document.querySelector('.language');
const langDropDown = langButton.querySelector('.dropdown');

langButton.addEventListener('click', () => {
  langDropDown.classList.toggle('opened');
});

const decisions = document.querySelector('.decisions');
const orderedItems = decisions.querySelectorAll('.ordered-list');
orderedItems.forEach((i, index) => {
  const originText = i.innerText;

  i.innerText = `${index < 10 ? 0 : ''}${index + 1} ${originText}`;
});

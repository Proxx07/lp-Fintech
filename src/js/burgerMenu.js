const burgerMenu = () => {
  const burger = document.querySelector('.burger-js');
  const burgerContentPart = document.querySelector('.burger-content-js');
  const burgerFooter = document.querySelector('.burger-footer');
  const burgerToggler = [...document.querySelectorAll('.burger-toggle-js')];

  if (!burgerContentPart || !burgerToggler.length || !burger) return;
  const toggleBurger = () => {
    document.querySelector('html').toggleAttribute('no-scroll');
    burger.classList.toggle('opened');
  };

  burgerToggler.forEach((button) => {
    button.addEventListener('click', toggleBurger);
  });

  document.addEventListener('keydown', (e) => {
    if (!burger.classList.contains('opened')) return;
    if (e.keyCode === 27) {
      toggleBurger();
    }
  });

  const menu = document.querySelector('.menu').cloneNode(true);
  const menuItems = menu.querySelectorAll('a');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      toggleBurger();
    });
  });
  menu.classList.add('burger-menu');
  burgerContentPart.appendChild(menu);

  const copyright = document.querySelector('.copyright').cloneNode(true);
  burgerFooter.appendChild(copyright);
};

export default burgerMenu;

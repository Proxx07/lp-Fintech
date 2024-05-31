const buttons = document.querySelectorAll('.popup-trigger-btn');
const modals = document.querySelectorAll('.popup-modal');

if (buttons.length && modals.length) {
  const popupToggler = (element) => {
    element.classList.toggle('open');
    document.querySelector('html').toggleAttribute('no-scroll');
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(`#${button.dataset.target}`);
      popupToggler(modal);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target.closest('.body') && !e.target.classList.contains('close'))
        return;
      popupToggler(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('.popup-modal.open');
    if (e.keyCode === 27 && !!activeModal) {
      popupToggler(activeModal);
    }
  });
}

const formFields = document.querySelector('.footer-form .form-fields');
const callbackForm = document.querySelector('#popup-form');
if (callbackForm && formFields) {
  callbackForm.querySelector('.form').appendChild(formFields.cloneNode(true));
}

const forms = document.querySelectorAll('form');
if (forms) {
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const body = new FormData(form);
      console.log(new URLSearchParams(body).toString());
      form.reset();
    });
  });
}

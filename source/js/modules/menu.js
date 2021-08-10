export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (e) {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      if (menuLinks[i].dataset.href === `prizes`) {
        e.preventDefault();
        const overlay = document.querySelector(`.page-content__overlay`);
        overlay.classList.add(`is-process`);
        overlay.classList.add(`is-active`);
        overlay.addEventListener(`transitionend`, function () {
          window.location.href = menuLinks[i].href;
          overlay.classList.remove(`is-process`);
          setTimeout(() => {
            overlay.classList.remove(`is-active`);
          }, 0);
        });
      }
    });
  }
};

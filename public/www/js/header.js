window.addEventListener("load", function () {
  const headerLogo = document.querySelector(".header-logo");
  const headerNavi = document.querySelector(".header-navi");
  const hdCss = document.querySelector(".header");
  const menu = document.querySelector(".header-menu-list");
  const activeScrollY = 0;

  window.addEventListener("resize", function () {
    const winWidth = window.innerWidth;
    const hideLogo = (_logo, _navi, _hdcss, _scY, _tgY, _mucss) => {
      if (_scY > _tgY) {
        _logo.style.display = "none";
        _navi.style.display = "none";
        _hdcss.style.height = "50px";
        _mucss.style.height = "50px";
      } else {
        _logo.style.display = "flex";
        _navi.style.display = "block";
        _hdcss.style.height = "90px";
        _mucss.style.height = "auto";
      }
    };
    if (winWidth <= 767) {
      window.addEventListener("scroll", function () {
        hideLogo(headerLogo, headerNavi, hdCss, window.scrollY, activeScrollY, menu);
      });
    }
  });
});

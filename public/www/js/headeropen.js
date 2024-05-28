window.addEventListener("load", function () {
  const headerOpenBt = document.querySelector(".navi-menu");
  const headerOpenBg = document.querySelector(".header-open-bg");
  const headerOpenMu = document.querySelector(".header-open-menu");

  let nvMenuOpen = false;

  // navi-menu 클릭시 header-open-menu 보여짐
  headerOpenBt.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("클릭");

    if (nvMenuOpen === false) {
      // headerOpenBt.classList.remove("navi-menu-open");
      // headerOpenBg.classList.remove("header-open-bg-show");
      // headerOpenMu.classList.remove("header-open-menu-show");
      // nvMenuOpen = false;
      headerOpenBt.classList.add("navi-menu-open");
      headerOpenBg.classList.add("header-open-bg-show");
      headerOpenMu.classList.add("header-open-menu-show");
      nvMenuOpen = true;
    }

    // 빈 화면 클릭시 header-open-menu 닫혀짐
    const hdBgClose = document.querySelector(".header-open-bg");
    hdBgClose.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("닫힘");
      headerOpenBg.classList.remove("header-open-bg-show");
      headerOpenMu.classList.remove("header-open-menu-show");
      nvMenuOpen = false;
    });
  });
});

window.addEventListener("load", function () {
  const headerLogo = document.querySelector(".header-logo");
  const headerNavi = document.querySelector(".header-navi");
  const hdCss = document.querySelector(".header");
  const menu = document.querySelector(".header-menu-list");
  const activeScrollY = 0;

  const resizeHead = () => {
    const winWidth = window.innerWidth;
    if (winWidth <= 767) {
      window.addEventListener("scroll", scrollWindow);
      scrollWindow();
      // scrollWindow(); 가 없으면 모바일화면 렌더링 했을 때 스크롤이 내려가 있어도 headerlogo가 보임
      // 이벤트 scroll했을 때만 scrollWindow가 실행되도록 되어있기 때문에
    } else {
      window.removeEventListener("scroll", scrollWindow);
      deskWith();
    }
  };

  const scrollWindow = () => {
    const scY = window.scrollY;
    if (scY > activeScrollY) {
      headerLogo.style.display = "none";
      headerNavi.style.display = "none";
      hdCss.style.height = "50px";
      menu.style.height = "50px";
    } else {
      headerLogo.style.display = "flex";
      headerNavi.style.display = "block";
      hdCss.style.height = "90px";
      menu.style.height = "auto";
    }
  };

  const deskWith = () => {
    headerLogo.style.display = "";
    headerNavi.style.display = "";
    hdCss.style.height = "";
    menu.style.height = "";
  };

  window.addEventListener("resize", resizeHead);
  resizeHead();
  // resizeHead(); 가 없으면, resize 이벤트가 발생했을 경우에만 함수가 실행되기 때문에 모바일 화면으로 바로열면 header로고가 보임
});

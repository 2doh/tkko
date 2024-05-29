window.addEventListener("load", function () {
  const headerOpenBt = document.querySelector(".navi-menu");
  const headerOpenBg = document.querySelector(".header-open-bg");
  const headerOpenMu = document.querySelector(".header-open-menu");

  let nvMenuOpen = false;

  // navi-menu 클릭 시 header-open-menu 보여짐
  headerOpenBt.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("클릭");

    if (!nvMenuOpen) {
      headerOpenBg.style.display = "block"; // 배경 표시
      headerOpenMu.style.display = "block"; // 메뉴 표시
      setTimeout(() => {
        headerOpenBt.classList.add("navi-menu-open");
        headerOpenBg.classList.add("header-open-bg-show");
        headerOpenMu.classList.add("header-open-menu-show");
      }, 10); // 트랜지션을 적용하기 위한 약간의 딜레이
      nvMenuOpen = true;
    } else {
      headerOpenBt.classList.remove("navi-menu-open");
      headerOpenBg.classList.remove("header-open-bg-show");
      headerOpenMu.classList.remove("header-open-menu-show");
      setTimeout(() => {
        headerOpenBg.style.display = "none"; // 트랜지션 후 배경 숨기기
        headerOpenMu.style.display = "none"; // 트랜지션 후 메뉴 숨기기
      }, 300); // 트랜지션 시간과 동일한 딜레이
      nvMenuOpen = false;
    }
  });

  // 빈 화면 클릭 시 header-open-menu 닫힘
  headerOpenBg.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("닫힘");

    headerOpenBt.classList.remove("navi-menu-open");
    headerOpenBg.classList.remove("header-open-bg-show");
    headerOpenMu.classList.remove("header-open-menu-show");
    setTimeout(() => {
      headerOpenBg.style.display = "none"; // 트랜지션 후 배경 숨기기
      headerOpenMu.style.display = "none"; // 트랜지션 후 메뉴 숨기기
    }, 300); // 트랜지션 시간과 동일한 딜레이
    nvMenuOpen = false;
  });
});

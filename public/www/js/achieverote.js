window.addEventListener("load", function () {
  const rotebox = document.querySelectorAll(".imminent-num");
  const rotate = () => {
    rotebox.forEach((item, index) => {
      setTimeout(() => {
        item.style.transform = `rotate3d(1, 0, 0, 360deg)`;
        item.style.transition = `all 0.5s`;
        console.log(rotate);
      }, index * 200);
    });
  };
  //   setInterval(rotate, 1000);
  rotate();
});

window.addEventListener("load", function () {
  const clock = document.querySelector(".time-limited-clock .time-limited-clock-axis");
  let rotation = 360; // 초기 회전 각도

  const clockRote = () => {
    rotation += 360;
    clock.style.transform = `rotate(${rotation}deg)`;
    setTimeout(clockRote, 2500);
  };
  clockRote();
});

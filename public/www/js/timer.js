window.addEventListener("load", function () {
  const showRemain = document.querySelector(".time-limited-img-top h2");
  const decreaseTime = (timeRemain) => {
    const time = parse(timeRemain);
    showTimes(time);
    const decrease = () => {
      setInterval(function () {
        if (time.seconds === 0 && time.minutes === 0 && time.hours === 0) {
          showRemain.textContent = "마감시간 종료";
        } else if (time.seconds === 0 && time.minutes === 0 && time.hours !== 0) {
          time.hours--;
          time.minutes = 59;
          time.seconds = 59;
        } else if (time.seconds === 0 && time.minutes !== 0) {
          time.minutes--;
          time.seconds = 59;
          console.log("gd");
        } else {
          time.seconds--;
          console.log(decrease);
        }
        showTimes(time);
      }, 1000);
    };
    decrease();
  };
  const parse = (timestring) => {
    const [hours, minutes, seconds] = timestring.split(":").map(Number);
    return { hours, minutes, seconds };
  };
  const showTimes = (time) => {
    // console.log(time);
    let tt = time.minutes;
    if (time.minutes <= 0) {
      tt = "0" + time.minutes;
    }
    showRemain.textContent = `${time.hours}:${tt}:${time.seconds}`;
  };
  decreaseTime("00:61:00");
});

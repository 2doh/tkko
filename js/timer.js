window.addEventListener("load", function () {
  const showRemain = document.querySelector(".time-limited-img-top h2");
  const decreaseTime = (timeRemain) => {
    const time = parse(timeRemain);
    showTimes(time);
    const decrease = () => {
      setInterval(function () {
        if (time.seconds === 0 && time.minutes === 0 && time.hours === 0) {
        } else if (time.seconds === 0 && time.minutes === 0 && time.hours !== 0) {
          time.hours--;
          time.minutes = 59;
          time.seconds = 59;
        } else if (time.seconds === 0 && time.minutes !== 0) {
          time.minutes--;
          time.seconds = 59;
        } else {
          time.seconds--;
          // console.log(decrease);
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
    let hourtxt = time.hours;
    let mintxt = time.minutes;
    let sectxt = time.seconds;
    if (time.hours < 10) {
      hourtxt = "0" + time.hours;
    }
    if (time.minutes < 10) {
      mintxt = "0" + time.minutes;
    }
    if (time.seconds < 10) {
      sectxt = "0" + time.seconds;
    }
    showRemain.textContent = `${hourtxt}:${mintxt}:${sectxt}`;
  };
  decreaseTime("10:10:");
});

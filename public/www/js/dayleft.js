window.addEventListener("load", function () {
  const showTime = document.querySelector(".imminent-contents-textbox-bottom-right");
  const dayThis = new Date();
  const toDay = dayThis.getDate();
  const toMonth = dayThis.getMonth();
  const toYear = dayThis.getFullYear();
  const calcTime = (setTimeleft) => {
    const goalTime = parse(setTimeleft);
    const timeLeft = calcTimeLeft(goalTime);
    showTime.innerHTML = `${timeLeft}일 남음`;
  };
  const parse = (dateString) => {
    const [year, month, day] = dateString.split(".").map(Number);
    return { year, month, day };
  };
  const calcTimeLeft = (goalTime) => {
    const yearLeft = goalTime.year - toYear;
    const monthLeft = goalTime.month - toMonth;
    const dayLeft = goalTime.day - toDay;
    const showTimeLeft = yearLeft * 365 + monthLeft * 30 + dayLeft - 30;
    return showTimeLeft;
  };
  calcTime("2024.05.25");
});

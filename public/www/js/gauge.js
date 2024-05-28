window.addEventListener("load", function () {
  const imminent = document.querySelector(".gauge");
  const imminentAchieve = document.querySelector("#imminentachieve");
  const imminentFund = document.querySelector("#imminentfund");
  const imminentGoal = document.querySelector("#imminentgoal");
  const achieve = () => {
    const showFund = (showfund) => {
      const show = showfund.toLocaleString();
      imminentFund.innerHTML = `${show}원`;
      return showfund;
    };

    const goalFund = (goalfund) => {
      const goal = goalfund.toLocaleString();
      imminentGoal.innerHTML = `${goal}원`;
      return goalfund;
    };

    const goalAchieve = (showFund, goalFund) => {
      const achieveGoal = (showFund / goalFund) * 100;
      const showAchieve = Math.round(achieveGoal);
      console.log(showAchieve);
      console.log(achieveGoal);
      imminentAchieve.innerHTML = `${showAchieve}% 달성`;
      return showAchieve;
    };

    const gauge = (gauge) => {
      imminent.style.width = `${gauge}%`;
    };

    const showFundValue = showFund(1000000);
    const goalFundValue = goalFund(8000000);
    const achieve = goalAchieve(showFundValue, goalFundValue);
    gauge(achieve);
  };
  achieve();
});

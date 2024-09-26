window.addEventListener("load", function () {
  const dataUrl = "./apis/mostfund.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      let allTag = "";
      const funding = document.querySelector(".mostfund-inner");
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const tag = `<div class="mostfund-box">
      <img class="mostfund-img" src="./images/${obj.pic}">
      <div class="mostfund-textbox">
          <span class="mostfund-content">${obj.title}</span>
          <span class="mostfund-sub">${obj.fundraisings}</span>
        <div class="mostfund-bottom">
          <div class="gaugebar">
            <div class="gauge"></div>
          </div>
          <div class="mostfund-text">
            <h2 style="color:#202020; font-weight: 600;">11,171,479원</h2>
            <h2 style="color:#ff4050; font-weight: 600">22%</h2>
          </div>
        </div>
      </div>                  
    </div>`;
        allTag += tag;
      }
      funding.innerHTML = allTag;
    })
    .catch((error) => {
      console.log(error);
    });
});

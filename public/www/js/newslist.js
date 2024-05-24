window.addEventListener("load", function () {
  const dataUrl = "./apis/newslist.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      let allTag = "";
      const newslist = document.querySelector(".main-news-bottom-wrap");
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const tag = `<div class="main-news-bottom-news br-20 shadow">
        <img src="./images/${obj.pic}">
        <div class="main-news-bottom-slide-textbox">
        <div class="main-news-bottom-slide-textbox-inner">
          <span class="bottom-news-hashtag">${obj.tag}</span>
          <h2 class="bottom-news-title">${obj.title}</h2>
          <span class="bottom-news-subtitle">
            ${obj.content}
          </span>
          <a href="#"><div class="gaugebar"><div class="gauge"></div></div></a>
          <div class="main-news-bottom-news-gaugetext">
            <h2 class="main-news-bottom-news-gaugetext-left">1,826,699원</h2>
            <h2 class="main-news-bottom-news-gaugetext-right">51%</h2>
          </div>
        </div>
      </div>
      </div>`;
        allTag += tag;
      }
      newslist.innerHTML = allTag;
    })
    .catch((error) => {
      console.error(error);
    });
});

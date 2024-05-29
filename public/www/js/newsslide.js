window.addEventListener("load", function () {
  const dataUrl = "./apis/newsslide.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      let allTag = "";
      for (let i = 0; i < result.length; i++) {
        const item = result[i];
        const swiper = `<div class="swiper-slide"><div class="main-news-bottom-slide br-20 shadow">
        <img src="./images/${item.imgpath}">
        <div class="main-news-bottom-slide-textbox">
          <div class="main-news-bottom-slide-textbox-inner">                  
            <span class="slide-textbox-hashtag">#모두의 행동</span>
            <h2 class="slide-textbox-title">${item.title}</h2>
            <span class="slide-textbox-subtitle">${item.story}</span>
            <div class="slide-textbox-box"><svg class="slide-text-box-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" width="14" height="14" opacity="1" class="sc-62ee9b1b-0 gsIhNz"><g fill="none" fill-rule="evenodd"><path d="m15.414.566 2.934 2.933L22.5 3.5a2 2 0 0 1 2 2v4.15l2.934 2.936a2 2 0 0 1 0 2.828L24.5 18.35 24.5 22.5a2 2 0 0 1-2 2h-4.15l-2.936 2.934a2 2 0 0 1-2.828 0L9.65 24.5 5.5 24.5a2 2 0 0 1-2-2v-4.152L.565 15.414a2 2 0 0 1 0-2.828L3.499 9.65 3.5 5.5a2 2 0 0 1 2-2h4.151L12.586.565a2 2 0 0 1 2.828 0z" fill="#ad4cfe"></path><path d="M18.02 9.62a1 1 0 0 1 1.677 1.082l-.068.106-6.066 8.21a1 1 0 0 1-1.443.175l-.09-.085-3.506-3.73a1 1 0 0 1 1.366-1.456l.091.086 2.685 2.857 5.354-7.246z" fill="#fff" fill-rule="nonzero"></path></g></svg>${item.partner}</div>
            <div class="main-news-bottom-slide-pagination br-20">1/3</div>
          </div>                
        </div>
      </div>
      </div>`;
        allTag += swiper;
      }
      const whereTag = document.querySelector(".newsslide .swiper-wrapper");
      whereTag.innerHTML = allTag;
      const topSlide = new Swiper(".newsslide", {
        loop: true,
      });
      topSlide();
    })
    .catch((error) => {
      console.log(error);
    });
});

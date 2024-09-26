window.addEventListener("load", function () {
  // 1. 외부에서 자료를 불러온다.
  const dataUrl = "./apis/cardslide.json";

  fetch(dataUrl)
    .then((response) => response.json()) // JSON 형식으로 변환하여 반환
    .then((result) => {
      // 2. json 변경된 데이터 활용하기
      let slideTags = "";

      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        const slide = `
          <div class="swiper-slide">
            <a href="${data.url}" 
              <p class="swiper-slide-title">${data.title}</p>
              <p class="swiper-slide-content">${data.content}</p>
            </a>
          </div>`;
        slideTags += slide;
      }

      const whereTag = document.querySelector(
        ".swiper-cardslide .swiper-wrapper"
      );
      whereTag.innerHTML = slideTags;

      // swiper 초기화
      const cardslide = new Swiper(".swiper-cardslide", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        spaceBetween: 30, // 슬라이드 사이 간격 지정
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

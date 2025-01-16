window.onload = function () {
  const visual_swiper = new Swiper(".visualSwiper", {
    // const 쓰면 내 스와이퍼 이름 넣어주기
    slidesPerView: 1.4,
    // 한 화면에 보일 슬라이드 개수 
    spaceBetween: 20,
    // 슬라이드 사이의 간격
    loop: true,
    // 슬라이드 돌고 돌고 .. 돌아서 
    breakpoints: {
      590: {
        // 브라우저 사이즈가 590px 이상일 때 보이는 슬라이드 개수 2.5개
        slidesPerView: 2,
      },
      768: {
        // 브라우저 사이즈가 768 이상일 때 보이는 슬라이드 개수가 4개
        slidesPerView: 3.5,
      },
      1050: {
        // 브라우저 사이즈가 768 이상일 때 보이는 슬라이드 개수가 4개
        slidesPerView: 4,
      },

    },
  });
};

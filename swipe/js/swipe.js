window.onload = function () {
  // 지금 js가 헤드에 있으니까 이거 넣어주는 거임 윈도우(html,css) 다 읽고 기능하라는 뜻
  const itemSwiper = new Swiper(".itemSwiper", {
    // itemSwiper(내가 정해주는 itemSwiper의 이름 아무거나 좋ㅇㅏ요)는 .itemlSwiper라는 새로운 스와이퍼입니다 땅땅땅 지정하는 겁니다.
    slidesPerView: 2,
    // 가장 작은 사이즈의 브라우저일 때 보일 개수입니다
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      590: {
        // 작은 수부터 차례대로 적어주세용
        slidesPerView: 2.5,
      },
      768: {
        // 768px보다 클 때 3.5장 보여줄 겁니다.
        slidesPerView: 3.5,
      },
      1050: {
        // 1050px 보다 큰 브라우저일 때 4장 보여줄 겁니다~
        slidesPerView: 4,
      },
    },
  });
  //   viusal swiper
  const visualswiper = new Swiper(".visualSwiper", {
    slidesPerView: 1,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  });
};

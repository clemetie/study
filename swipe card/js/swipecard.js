window.onload = function () {
  const wrapSwiper = new Swiper(".wrap", {
    direction: "horizontal",
    // 슬라이드 방향 지정해주는 것입니다..
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: -100,
      // 슬라이드 간격
      depth: 400,
      // 슬라이드 깊이
      modifier: 1,
      // 위에 뭐 로테이트 이런 효과의 강도 높을수록 과해짐(?)
      slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".wrap .swiper-pagination",
      type: "fraction",
      // type 종류 많음 ! 이건 숫자임
    },
    navigation: {
      nextEl: ".wrap .swiper-button-next",
      prevEl: ".wrap .swiper-button-prev",
    },
  });
  //   play - const
  const btnStart = document.querySelector(".btn-start");
  btnStart.addEventListener("click", function () {
    // console.log("재생버튼 click");
    wrapSwiper.autoplay.start();
  });
  //   stop - const
  const btnStop = document.querySelector(".btn-stop");
  btnStop.addEventListener("click", function () {
    // console.log("멈춤버튼 click");
    wrapSwiper.autoplay.stop();
  });
};

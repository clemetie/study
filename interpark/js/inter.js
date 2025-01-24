// window.onload = function () {});
// 이건 조금 구버전 ?
window.addEventListener("load", function () {
  // ㄴ이게 더 최신 버전임 아무거나 해도 됨, 협업할 떈 이거 쓰세용
  const mypageBtn = this.document.querySelector(".mypageBt");
  const mypageList = this.document.querySelector(".mypage-list");
  mypageBtn.addEventListener("click", function () {
    // mypageList.classList.add(".showMypage"); 클래스명에 . 안 찍어야 됨 ,,
    mypageList.classList.toggle("showMypage");
  });

  //   swiper
  const swTour = new Swiper(".sw-tour", {
    slidesPerView: 1.2,
    spaceBetween: 32,

    grid: {
      rows: 3,
      fill: "row",
    },
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
        },
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 26,
        grid: {
          rows: 2,
        },
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 26,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
  });
  const swshopping = new Swiper(".sw-shopping", {
    slidesPerView: 1.3,
    spaceBetween: 20,
    grid: {
      rows: 1,
      fill: "row",
    },
    breakpoints: {
      480: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 3,
        },
      },

      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
  });
});

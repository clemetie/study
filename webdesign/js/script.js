$(function () {
  //메뉴
  $(".navi>li").mouseover(function () {
    $(this).find(".submenu").stop().slideToggle(500);
    $(".submenu-bg").stop().slideToggle(500);
  });
  //   슬라이드
  const slideList = $(".slide-list");
  const slideWidth = $(".slide li").width();
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first")).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);

  //탭메뉴
  $(".tab>li>a").click(function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  //모달
  $(".notice li:first-child").click(() => {
    $("#modal").addClass("active");
  });
  $(".modal-close").click(() => {
    $("#modal").removeClass("active");
  });
});

$(function () {
  $(".menu-list").hover(function () {
    $(this).find(".depth").stop().slideToggle(500);
    $(".depthBg").stop().slideToggle(500);
  });
  const slide = $(".slide");
  const visual = $(".visual li").width();

  const slideShow = () => {
    slide.animate({ marginLeft: -visual }, 1000, function () {
      $(this).append($(this).find("li:first")).css({ marginLeft: 0 });
    });
  };

  setInterval(slideShow, 3000);
  // 탭
  $(".tab>li>a").click(function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
});

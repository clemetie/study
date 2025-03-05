$(function () {
  $(".menu-list").hover(function () {
    $(this).find(".depth").stop().slideToggle(500);
    $(".depthBg").stop().slideToggle(500);
  });
  const slide = $(".slide");
  const visual = $(".visual");
  const slideShow = () => {
    slide.animate({ marginLeft: -visual }, 1000, function () {
      $(this).append($(this).find("li:first").css({ marginLeft: 0 }));
    });
  };
  setInterval(slideShow, 3000)
});

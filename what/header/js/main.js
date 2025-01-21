$(document).ready(function () {
  // 햄버거바 누르면 메뉴가 슝 ..
  $("#hamburger-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
  });
  // 햄버거 바 안에 메인 메뉴 누르면 서브메뉴 나옴
  $(".mobile-nav .gnb > li > a ").click(function () {
    // 모바일 버전 네브에서 메인메뉴 클릭했을 때
    $(this).next(".mobile-nav .depth2").stop().slideToggle();
// 디스는 a가 여러개니까 a 중에 뭐든/ 하던거 중단하고 모바일 뎁스2가 슬라이드 업다운(토글)해라
  });
  //   close버튼 누르면 메뉴가 저~멀리 돌아감
  $("#close-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: -300,
      },
      300
    );
  });
  // 메뉴에 호버했을 때
  $("nav .gnb").hover(
    function () {
      // nav .gnb에 hover했을 때
      $("nav .depth2 , .header-bg").stop().slideDown();
      // nav .depth2와 ,header-bg는 하던 거 멈추고? 슬라이드 다(대문자)운해라!
    },
    function () {
      // 마우스 호버 안 할 때
      $("nav .depth2 , .header-bg").stop().slideUp();
    }
  );
});

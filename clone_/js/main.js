window.onload = function () {
  // 지금 헤드에 넣어 놨으니까 먼저 읽지말고 윈도우(html) 다 읽고 나면 js기능 하라
  // 모달창 닫아보께여
  const modal = document.querySelector(".modal-warp");
  // modal(그냥 이름인거임)는 document에 .modal-warp 찾으면 그게 modalClose다
  const modalClose = document.querySelector(".modal-close");
  // modalClose(그냥 이름인거임)는 document에 .modal-close 찾으면 그게 modalClose다
  modalClose.addEventListener("click", function () {
    // modalClose(modal-close찾아놓은거)에 이벤트 추가한다(클릭하면, 기능하여라)
    modal.style.display = "none";
    // modal(modal-wrap찾아 놓은 거)는 디스플레이는 none으로 스타일 시켜놓아라
  });
  //   비주얼 화살표 버튼 입니당
  const visualBt = document.querySelector(".visual-bt");
  visualBt.addEventListener("click", function () {
    // 비주얼 버튼에 클릭했을 때 스크롤투섹션 기능을 해라
    scrollToSection("#business");
  });
  // scrollToSection은 뭐냐! 위에 적어둔 #business로 스무스하게 이동 하는 것 그 함수는 밑에 적혀있는 거
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  // top버튼
  const topBtn = document.querySelector(".top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // a href#은 가장 위로 가면서 새로고침하는 기본 event가 있는데 기본 event를 default 없애주는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // 위에서 기능을 없앴으니 다시 주는 거 젤 위로 스무스하게 가라 
  });
};

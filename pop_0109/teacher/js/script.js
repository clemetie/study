$(document).ready(function () {
  //  alert("안녕하세요")
  //  ㅜ 메인메뉴 호버했을 때 서브메뉴 보이게 하는 코드 시-작
  $(".gnb > li").hover(
    function () {
      // console.log($(this)); 는 f12로 this가 뭔지 볼 수 있게 해주는 코드(오로지 확인용)
      //ㄴthis가 의미하는 것 상단 $에 적은 거! 지금은 (.gnb > li)임
      $(this).find(".depth2").stop().slideDown();
      // this(.gnb>li)에서 .depth2를 찾고 멈출 거 멈추고 내려와서 보여라..? 대충 이런 으미 슬라이드다운에서 D 대문자로 꼭 써야함
    },
    function () {
      $(this).find(".depth2").stop().slideUp();
    }
    //   function1은 슬라이드 다운, function2는 슬라이드 업!
    // 기능 여러개 줄 때 function1(){여기 기능 1 주고 , 또 funtion(){여기다가 기능 2 넣기}}
  );
  //   이미지 슬라이드 쇽쇽 보이는 코드 시-작
  //   첫번째 이미지 보이게 하는 코드
  $(".slide-all > li").eq(0).siblings().hide();
  // 슬라이드-올 클래스 안에 li를 선택하고, 0번 자식을 골라서 0번의 같은 부모 안에 있는 자식들은 숨겨라
  // eq는 li중에 (몇번 자식)을 고를 지 sibling은 같은 부모안에 있는 자식들 hide 는 숨겨라!
  // 첫번째 li(이미지1)의 인덱스 번호는 0인거임 인덱스 번호가 0부터 시작하기 때문
  var slideI = 0;
  // 현재 슬라이드의 인덱스는 0부터 시작할게 **slideI(슬라이드인덱스)는 현재 표시 중인 슬라이드의 위치(인덱스)**
  setInterval(function () {
    // 인터벌 준비해라 3초(3000)가 인터벌 타임이다! 슬라이드 인덱스 번호 0-3까지 더하고 0에 오고 .. 를 인터벌로 진행
    if (slideI < 2) {
      slideI++;
      // 만약 슬라이드인덱스번호가 2보다 작을 땐 3이 될 때까지 슬라이드인덱스번호를 더하고
    } else {
      slideI = 0;
    }
    // 2가 지나게 된다면 슬라이드 인덱스는 0번으로 와라
    $(".slide-all > li").eq(slideI).siblings().fadeOut();
    // 슬라이드-올 안에 있는 li 중에 slideI(슬라이드 인덱스 번호를 더하고 줄이는 인터벌을 진행 중이어서 slideI를 줌, 아니면 슬라이드인덱스 하나하나 다 넣어야 함 )만 선택하고 같은 부모 안에 있는 자식은 페이드 아웃하고
    $(".slide-all > li").eq(slideI).fadeIn();
    // 슬라이드-올 안에 있는 li 중에 slideI(슬라이드 인덱스 번호를 더하고 줄이는 인터벌을 진행 중이어서 slideI를 줌, 아니면 슬라이드인덱스 하나하나 다 넣어야 함 )이 되면 페이드 인을 해라
  }, 3000);
  // 공지사항, 갤러리 탭 메뉴 동작 시키는 코드 시-작
  $(".c1 h4").click(function () {
    // .c1 안에 있는 h4가 클릭이 되었을 때 아래에 있는 아이를 작동해라
    $(".c1 h4, .c1 ul").removeClass("on");
    // html,css에서 h4에 클래스 "on"을 (addClass) 더해서 버튼에 색을 줬었음
    // 그래서 클래스를 지워준다. 클래스를 지우는 것 = 버튼 색을 지우는 것
    $(this).addClass("on").next("ul").addClass("on");
    // .c1 h4에 클래스(on)를 더해준 다음 ul에도 클래스(ul엔 on=display:block 해놨음)를 더해주자
  });
  // 모달창 닫는 코드 시-작
  $(".close").click(function () {
    $(".modal").fadeOut();
  });
  $(".popup").click(function(){
    $(".modal").fadeIn();
  })
});

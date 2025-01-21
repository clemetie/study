window.onload = function () {
  const nav_scroll = document.querySelector("nav");
  // nav_scroll은 내가 지어주는 이름
  window.addEventListener("scroll", function () {
    // 윈도우에 이벤트를 더해라. 'scroll' 될 때
    // nav_scroll.classList.add("scrolled")
    // nav_scrolled에 클래스("scrolled")를 더해라!
    // ㄴ css에서 어떤 이벤트 할 지 미리 클래스에 담아두고 그 클래스를 가져와야함
    console.log("스크롤 Y 값:", window.scrollY);
    // 콘솔 안에 스크롤 Y 값 : window에scrollY값을 적어서 알려주라 
    if(window.scrollY > 170){
        // 만약 내 윈도우 스크롤 와이값이 170px보다 크면
        nav_scroll.classList.add("scrolled")
        // nav_scroll에 "scrolled"라는 클래스를 추가하고
    }
    else{
        // 아니면
        nav_scroll.classList.remove("scrolled")
        // nav_scroll에 "scrolled"라는 클래스를 제거하라. 
    }
  });
};

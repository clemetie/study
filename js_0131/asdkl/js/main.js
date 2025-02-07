window.addEventListener("load", function () {
  let pics = this.document.querySelectorAll(".pic");
  let lightBox = this.document.querySelector("#lightBox");
  let lightBoxImg = this.document.querySelector("#lightboxImg");
  //pics 반복문
  for (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener("click", showLightBox);
  }
  //lightbox 열고닫음
  function showLightBox() {
    let bigLocation = this.getAttribute("data-src");
    lightBoxImg.setAttribute("src", bigLocation);
    console.log(lightBoxImg);
    lightBox.style.display = "block";
  }
  lightBox.addEventListener("click", function () {
    lightBox.style.display = "none";
  });
});

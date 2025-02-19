window.addEventListener("load", function () {
  const displayImg = this.document.querySelector(".display-img");
  const thumbBar = this.document.querySelector(".thumb-bar");
  const btn = document.querySelector(".dark");
  const overlay = this.document.querySelector(".overlay");
  const images = [`pic.jpg`, `pic (1).jpg`, `pic (2).jpg`, `pic (3).jpg`, `pic (4).jpg`];
  const alt = {
    "pic.jpg": "Closeup of a human eye",
    "pic (1).jpg": "Closeup of a human eye",
    "pic (2).jpg": "Rock that looks like a wave",
    "pic (3).jpg": "Purple and white pansies",
    "pic (4).jpg": "Section of wall from a pharoah's tomb",
  };
  images.forEach((image) => {
    const newImg = this.document.createElement("img");
    newImg.setAttribute("src", `img/${image}`);
    newImg.setAttribute("alt", `${alt[image]}`);
    thumbBar.appendChild(newImg);
    newImg.addEventListener("click", (e) => {
      displayImg.src = e.target.src;
      displayImg.alt = e.target.alt;
    });
  });
  //다크모드 변경
  btn.addEventListener("click", () => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
      btn.setAttribute("class", "light");
      btn.textContent = "🖤";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      btn.setAttribute("class", "dark");
      btn.textContent = "💛";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  });
});

window.addEventListener("load", function () {
  const btn = this.document.querySelector("#toggleTheme");
  btn.addEventListener("click", () => {
    this.document.body.classList.toggle("dark");
    this.document.querySelector("header").classList.toggle("dark");
    this.document.querySelector("footer").classList.toggle("dark");
    const cart = this.document.querySelectorAll(".button");
    cart.forEach((btn2) => {
      btn2.classList.toggle("dark");
      const isdark = btn2.classList.contains("dark");
      const emoji = btn2.querySelector("#modeEmoji");
      if (emoji) emoji.textContent = isdark ? "🖤 다크 모드 🖤" : "💛 라이트 모드 💛";
    
    });
  });
});

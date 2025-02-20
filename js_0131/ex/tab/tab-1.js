window.addEventListener("load", () => {
  const popupBtnLinks = document.querySelectorAll(".popup-btn .inner a");
  const popupBtn = document.querySelector(".popup-btn");
  const popupTxt = document.querySelector(".pop-text");
  popupBtnLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      popupBtnLinks.forEach((link) => {
        link.classList.toggle("active");
      });
    });
  });
  popupBtn.addEventListener("click", () => {
    popupTxt.style.display = popupTxt.style.display === "none" ? "block" : "none";
  });
  // 메뉴 탭 기능
  const tabTitle = document.querySelectorAll(".tab-nav li a");
  tabTitle.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      tabTitle.forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.add("active");

      const tabItems = document.querySelectorAll(".tabitem");
      tabItems.forEach(function (tab) {
        tab.style.display = "none";
      });

      const target = element.getAttribute("href");
      document.querySelector(target).style.display = "block";
    });
  });
  tabTitle[0].click();
});

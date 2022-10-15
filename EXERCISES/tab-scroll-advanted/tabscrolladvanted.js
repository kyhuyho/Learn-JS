window.addEventListener("load", function () {
  const tab = this.document.querySelector(".tab");
  const tabList = this.document.querySelector(".tab-list");
  const tabItems = this.document.querySelectorAll(".tab-item");
  const tabNext = document.querySelector(".tab-next");
  const tabPrev = document.querySelector(".tab-prev");
  const tabOffetLeft = tab.offsetLeft;
  const deltaScroll = 50;
  const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
  tabItems.forEach((item) => item.addEventListener("click", handleClickTab));
  function handleClickTab(e) {
    tabItems.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft - tabOffetLeft - tabPrev.offsetWidth;
    tabList.scroll(leftSpacing / 2, 0);
    if (leftSpacing > 0) {
      tabPrev.classList.remove("disabled");
    } else if (leftSpacing <= 0) {
      tabPrev.classList.add("disabled");
    }
    if (e.target.matches(".final")) {
      tabNext.classList.add("disabled");
    } else if (!e.target.matches(".final")) {
      tabNext.classList.remove("disabled");
    }
  }
  tabList.addEventListener("wheel", function (e) {
    let delta = e.deltaY;
    this.scrollLeft += e.deltaY;
    if (this.scrollLeft > 0) {
      tabPrev.classList.remove("disabled");
    } else {
      tabNext.classList.remove("disabled");
    }
    if (this.scrollLeft >= tabScrollWidth) {
      tabNext.classList.add("disabled");
    } else if (this.scrollLeft <= 0) {
      tabPrev.classList.add("disabled");
    }
  });
  tabNext.addEventListener("click", function (e) {
    tabItems.forEach((item) => item.classList.remove("active"));
    tabItems[0].classList.add("active");
    tabPrev.classList.remove("disabled");
    tabList.scrollLeft += deltaScroll;
    if (tabList.scrollLeft >= tabScrollWidth) {
      this.classList.add("disabled");
    }
  });
  tabPrev.addEventListener("click", function (e) {
    tabItems.forEach((item) => item.classList.remove("active"));
    tabItems[0].classList.add("active");
    tabNext.classList.remove("disabled");
    tabList.scrollLeft -= deltaScroll;
    if (tabList.scrollLeft <= 0) {
      this.classList.add("disabled");
    }
  });
});

window.addEventListener("load", function () {
  const tabItems = this.document.querySelectorAll(".tab-item");
  const tabList = this.document.querySelector(".tab-list");
  const tab = this.document.querySelector(".tab");
  const tabOffsetLeft = tab.offsetLeft;
  tabItems.forEach((item) => item.addEventListener("click", handleTabClick));

  function handleTabClick(e) {
    tabItems.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft - tabOffsetLeft;
    // console.log(leftSpacing);
    tabList.scroll(leftSpacing / 2, 0);
  }
});

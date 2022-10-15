const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
tabItems.forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // console.log(event.target);

  // Xóa hết tất cả class active ở tab-item
  tabItems.forEach((item) => item.classList.remove("active"));
  // Sau đó add class active vào tab hiện tại
  event.target.classList.add("active");

  // Lấy ra custom attribute
  const tabNumber = parseInt(event.target.dataset.tab);
  // console.log(tabNumber);
  // Xóa hết class active ở tab-content
  tabContents.forEach((item) => {
    item.classList.remove("active");
    if (parseInt(item.getAttribute("data-tab")) === tabNumber) {
      item.classList.add("active");
    }
  });
  // Sau đó add class active vào content hiện tại
  //[...tabContents][tabNumber - 1].classList.add("active");
}

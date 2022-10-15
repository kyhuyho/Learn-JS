const dropdownSelect = document.querySelector(".dropdown-select");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownSelectText = document.querySelector(".dropdown-select-text");
const dropdownList = document.querySelector(".dropdown-list");
const dropdown = document.querySelector(".dropdown");
const icon = document.querySelector(".dropdown-down");
dropdownSelect.addEventListener("click", function (e) {
  // console.log(e.target);

  dropdownList.classList.toggle("show");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
});

dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    // console.log(e.target);
    const text = e.target.querySelector(".dropdown-text").textContent;
    // const text = e.target.firstElementChild.textContent;
    dropdownSelectText.textContent = text;
    dropdownList.classList.remove("show");
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  })
);

document.documentElement.addEventListener("click", function (e) {
  // console.log(e.target);

  if (dropdown.contains(e.target) === false) {
    dropdownList.classList.remove("show");
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  }
});

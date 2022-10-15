const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
  event.target.classList.toggle("fa-times");
  event.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.documentElement.addEventListener("click", handleClickOutMenu);

function handleClickOutMenu(event) {
  // console.log(event.target);
  // nếu cái menu ko chứa cái element nhấn vào và cái element nhấn vào ko phải là menu-toggle
  if (
    menu.contains(event.target) === false &&
    event.target.matches(".menu-toggle") === false
  ) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  }
}

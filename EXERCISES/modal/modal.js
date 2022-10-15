const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
const button = document.querySelector(".button");
button.addEventListener("click", function (e) {
  document.body.insertAdjacentHTML("afterbegin", template);
});

// const modalClose = document.querySelector(".modal-close");
// modalClose.addEventListener("click", function (e) {
//   console.log(e.target);
// });

document.body.addEventListener("click", function (e) {
  // console.log(e.target);

  if (e.target.matches(".modal-close")) {
    // const modal = document.querySelector(".modal");
    const modal = e.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }
});

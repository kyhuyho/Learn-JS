window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = `<div class="sweet-alert">
    <i class="fa fa-check sweet-icon"></i>
    <p class="sweet-text">Congratulations on learning JS</p>
  </div>`;
    document.body.insertAdjacentHTML("afterbegin", template);
  }
  const button = this.document.querySelector(".button");
  button.addEventListener("click", function (e) {
    renderSweetAlert();
    const sweetAlert = document.querySelector(".sweet-alert");
    if (sweetAlert) {
      setTimeout(function () {
        sweetAlert.parentNode.removeChild(sweetAlert);
      }, 2000);
    }
  });
});

window.addEventListener("load", function () {
  const passwordInput = this.document.querySelector(".input");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLenghthClass =
      e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass =
      e.target.parentNode.querySelector(".check-special");
    const checkItems = e.target.parentNode.querySelectorAll(".check-item");
    if (!value) {
      checkItems.forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });
      return;
    }
    if (value.length < 8) {
      checkLenghthClass.classList.add("unactive");
      checkLenghthClass.classList.remove("active");
    } else {
      checkLenghthClass.classList.add("active");
      checkLenghthClass.classList.remove("unactive");
    }
    passwordInputValidation(checkUpperClass, value, /[A-Z]/);
    passwordInputValidation(checkNumberClass, value, /\d/);
    passwordInputValidation(checkSpecialClass, value, /[$@%^&*(){}![\]#]/);
  });
  function passwordInputValidation(selector, value, regex) {
    if (!regex.test(value)) {
      selector.classList.add("unactive");
      selector.classList.remove("active");
    } else {
      selector.classList.remove("unactive");
      selector.classList.add("active");
    }
  }
});

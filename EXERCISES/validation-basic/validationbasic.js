const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("Plase enter your username");
    return;
  }
  if (!password) {
    alert("Plase enter your password");
    return;
  }
  if (password.length <= 3) {
    alert("Too short");
    return;
  }
});

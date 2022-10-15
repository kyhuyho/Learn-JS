// Bài 190: Sự kiện keydown
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.which);
  // if (e.key === "Enter") {
  //   console.log("You hit Enter!!!");
  // } else {
  //   console.log(e.key);
  // }
});

// Bài 191: Sự kiện keyup
// input.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });

// Bài 192: Sự kiện keypress
// input.addEventListener("keypress", function (e) {
//   console.log(e.key);
//   if (e.key === "Home") {
//     console.log("working");
//   }
// });

// Bài 193: Sự kiện change
// input.addEventListener("change", function (e) {
//   console.log("working");
// });

// Bài 194: Sự kiện focus và blur
// input.addEventListener("focus", function (e) {
//   console.log("input is focusing");
// });
// input.addEventListener("blur", function (e) {
//   console.log("input is blur");
// });

// Bài 195: Sự kiện submit trong form
// const form = document.querySelector(".form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (input.value === "") {
//     alert("You can not make empty input");
//   }
//   console.log(input.value);
// });

// Bài 196: Truy xuất các giá trị trong form cơ bản
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(this);
  // console.log(e.target);

  // console.log(this.elements);
  // console.log(this.elements["username"]);
  // console.log(this.elements["username"].value);
  // const username = this.elements["username"].value;
  // const gender = this.elements["gender"].value;
  // const hobby = this.querySelectorAll(`input[name="hobby"]`);
  // let hobbyValue = [];
  // [...hobby].forEach((item) => hobbyValue.push(item.value));
  // console.log({ username, gender, hobbyValue });
});

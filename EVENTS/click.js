// Bài 149: Giới thiệu

// Bài 150 151 152: Sự kiện click, Bubbling trong sự kiện click, Capturing trong click
const button = document.querySelector(".button");
function handleClick() {
  console.log("click button");
}
// Cách 1:
// button.addEventListener("click", function () {
//   console.log("click me");
// });
// Cách 2:
// button.addEventListener("click", handleClick);

const span = document.querySelector(".button span");
// span.addEventListener(
//   "click",
//   function (e) {
//     // e.stopPropagation();
//     e.stopImmediatePropagation();
//     console.log("click span");
//   },
//   {
//     capture: true,
//   }
// );
// span.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("click span 2");
// });
// document.body.addEventListener("click", function () {
//   console.log("click body");
// });

// Bài 153: Sự khác nhau giữa target và currentTarget
button.addEventListener("click", function (event) {
  console.log(`event.target: ${event.target}`);
  console.log(`event.currentTarget: ${event.currentTarget}`);
});

// Bài 154 157 : preventDefault() để làm gì ?, Tìm hiểu object style
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("click me");

  // console.log(event.target);
  // console.log(event.target.style);
  // event.target.style.color = "red";
  // link.style.backgroundColor = "blue";

  // Lấy custom attribute
  const name = event.target.dataset.nameAbc;
  console.log(name);
});

// Bài 177: Sự kiện di chuyển chuột cần nắm
const button = document.querySelector(".button");
// 1. mousemove
// button.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });
// 2. mouseover
// button.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });
// 3. mouseenter
// button.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });
// 4. mouseleave
// button.addEventListener("mouseleave", function () {
//   console.log("mouseleave");
// });

// Bài 178: Sự khác nhau giữa clientXY và pageXY
document.documentElement.addEventListener("mousemove", function (e) {
  // console.log(`pageX: ${e.pageX}`);
  // console.log(`clientX: ${e.clientX}`);
  // console.log(`pageY: ${e.pageY}`);
  // console.log(`clientY: ${e.clientY}`);
});

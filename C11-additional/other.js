// Bài 246: Tìm hiểu defer trong script
/* const p = document.querySelector("p");
console.log(p); */

// Bài 247: Tìm hiểu async trong script
// Bài 248: Tìm hiểu removeEventListener
// function handleMouseMove(e) {
//   console.log(e.clientX);
// }
// document.addEventListener("mousemove", handleMouseMove);
// const button = document.querySelector(".button");
// button.addEventListener("click", function (e) {
//   document.removeEventListener("mousemove", handleMouseMove);
// });

// Bài 249: Sự khác nhau giữa onclick và addEventListener
const button = document.querySelector(".button");
function hanldeClick() {
  console.log("clicked1");
}
function hanldeClick2() {
  console.log("clicked2");
}
// button.onclick = hanldeClick;
// button.onclick = hanldeClick2;
// button.addEventListener("click", hanldeClick);
button.addEventListener("click", hanldeClick2, {
  /* Chỉ chạy 1 lần duy nhất */
  once: true,
});

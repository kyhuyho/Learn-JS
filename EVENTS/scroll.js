// Bài 205: Giới thiệu sự kiện scroll
window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    console.log("scroll");
  }, 50)
);

// Bài 206: Debounce là gì?
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Bài 207: window.pageXOffset và window.pageYOffset
// console.log(window.pageXOffset);
// console.log(window.pageYOffset);
// Bài 208: Các phương thức, thuộc tính về scroll khác
const boxed = document.querySelector(".boxed2");
// console.log(boxed.scrollWidth);
// console.log(boxed.scrollHeight);
// boxed.addEventListener("scroll", function () {
//   console.log(boxed.scrollTop);
//   console.log(boxed.scrollLeft);
// });

// Bài 209: offsetWidth và scrollWidth
// console.log(boxed.offsetWidth);
// console.log(boxed.scrollWidth);
// console.log(boxed.offsetHeight);
// console.log(boxed.scrollHeight);

// Bài 210: scrollIntoView()

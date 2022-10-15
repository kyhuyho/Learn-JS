// Bài 140: Các thuộc tính liên quan tới offset
// 1. offsetWidth
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth);
// 2. offsetHeight
log(boxed.offsetHeight);
// 3. offsetLeft
log(boxed.offsetLeft);
// 4. offsetTop
log(boxed.offsetTop);
// 5. offserparent
log(boxed.offsetParent);

// Bài 141: Các thuộc tính liên quan tới client
// 1. clientWidth
log(boxed.clientWidth);
// 2. clientHeight
log(boxed.clientHeight);
// 3. clientLeft
log(boxed.clientLeft);
// 4. clientTop
log(boxed.clientTop);

// Bài 142: Các thuộc tính liên quan tới window
log(window.innerHeight);
log(window.outerHeight);
log(window.innerWidth);
log(window.outerWidth);

// Bài 143: Tìm hiểu getBoundingClientRect()
log(boxed.getBoundingClientRect());

// Bài 144: Sự khác nhau giữa NodeList và HTMLCollection
const li = document.getElementsByTagName("li"); // HTMLCollection
const li2 = document.querySelectorAll("li"); //NodeList
log(li);
log(li2);

// Bài 145: Sự khác nhau giữa parentNode và parentElement
// document.documentElement -> lấy ra thể html
log(document.documentElement.parentElement); // => null
log(document.documentElement.parentNode); // #document

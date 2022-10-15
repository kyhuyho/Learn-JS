// Bài 176: Sự khác nhau giữa load và DOMContentLoaded
window.addEventListener("load", function () {
  console.log("your web loaded");
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
});

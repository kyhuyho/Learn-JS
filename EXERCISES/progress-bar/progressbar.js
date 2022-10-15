const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  const scrollTop = this.window.pageYOffset;

  // Tính ra chiều cao thật của scrollbar
  const height =
    this.document.documentElement.scrollHeight -
    this.document.documentElement.clientHeight;
  // console.log(height);
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});

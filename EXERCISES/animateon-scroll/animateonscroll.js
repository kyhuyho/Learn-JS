window.addEventListener("DOMContentLoaded", function () {
  const images = this.document.querySelectorAll(".container img");
  this.window.addEventListener("scroll", function (e) {
    const windowScrollTop = this.window.pageYOffset;
    images.forEach((item) => {
      const itemOffsetTop = item.offsetTop;
      if (windowScrollTop > itemOffsetTop - item.offsetHeight / 2) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

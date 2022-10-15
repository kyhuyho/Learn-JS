window.addEventListener("load", function () {
  const links = this.document.querySelectorAll(".menu-link");
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(e) {
    // console.log(e.target);
    const cords = e.target.getBoundingClientRect();
    // console.log(cords);
    const { top, left, width, height } = cords;
    // console.log({ left, top, width, height });
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetBottom}px`;
  }
  const menu = this.document.querySelector(".menu");
  menu.addEventListener("mouseleave", function (e) {
    line.style.width = `0px`;
  });
});

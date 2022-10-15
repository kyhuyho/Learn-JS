window.addEventListener("load", function () {
  const text = this.document.querySelector(".text");
  text.addEventListener("mouseenter", function (e) {
    const title = e.target.dataset.tooltip;
    // console.log(title);
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);
    const cords = e.target.getBoundingClientRect();
    const triagleHeight = 20;
    // console.log(cords);
    const { top, left, width, height } = cords;
    tooltipDiv.style.left = `${left - width / 2}px`;
    tooltipDiv.style.top = `${top - height - triagleHeight}px`;
  });
  text.addEventListener("mouseleave", function (e) {
    const tooltipText = document.querySelector(".tooltip-text");
    tooltipText.parentNode.removeChild(tooltipText);
  });
});

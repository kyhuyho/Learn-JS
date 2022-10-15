window.addEventListener("load", function () {
  const sliderMain = this.document.querySelector(".slider-main");
  const sliderItems = this.document.querySelectorAll(".slider-item");
  const dotItems = this.document.querySelectorAll(".slider-dot-item");
  const next = this.document.querySelector(".slider-next");
  const prev = this.document.querySelector(".slider-prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  let positionX = 0;
  let index = 0;
  next.addEventListener("click", function (e) {
    handleChangeSlider(1);
  });
  prev.addEventListener("click", function (e) {
    handleChangeSlider(-1);
  });
  dotItems.forEach((item) =>
    item.addEventListener("click", function (e) {
      dotItems.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      const sliderIndex = parseInt(e.target.dataset.index);
      index = sliderIndex;
      positionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    })
  );
  function handleChangeSlider(direction) {
    if (direction === 1) {
      index++;
      /*  if (index > sliderItems.length - 1) {
        index = sliderItems.length - 1;
        return;
      } */
      if (index > sliderItems.length - 1) {
        index = 0;
        positionX = sliderItemWidth;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    } else if (direction === -1) {
      index--;
      /*  if (index < 0) {
        index = 0;
        return;
      } */
      if (index < 0) {
        index = sliderItems.length - 1;
        console.log(index);
        positionX = -1 * index * sliderItemWidth - sliderItemWidth;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    }
    dotItems.forEach((item) => item.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
});

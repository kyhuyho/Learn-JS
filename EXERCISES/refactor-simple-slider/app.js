window.addEventListener("load", function () {
  function Slider() {
    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItems = document.querySelectorAll(".slider-item");
    this.dotItems = document.querySelectorAll(".slider-dot-item");
    this.next = document.querySelector(".slider-next");
    this.prev = document.querySelector(".slider-prev");
    this.sliderItemWidth = this.sliderItems[0].offsetWidth;
    this.positionX = 0;
    this.index = 0;
    this.next.addEventListener("click", () => this.handleChangeSlider(1));
    this.prev.addEventListener("click", () => this.handleChangeSlider(-1));
    this.dotItems.forEach((item) =>
      item.addEventListener("click", (e) => this.handleChangeDots(e))
    );
  }
  new Slider();
  Slider.prototype.handleChangeDots = function (e) {
    this.dotItems.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    const sliderIndex = parseInt(e.target.dataset.index);
    this.index = sliderIndex;
    this.positionX = -1 * this.index * this.sliderItemWidth;
    this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
  };
  Slider.prototype.handleChangeSlider = function (direction) {
    if (direction === 1) {
      this.index++;
      if (this.index > this.sliderItems.length - 1) {
        this.index = this.sliderItems.length - 1;
        return;
      }
      this.positionX = this.positionX - this.sliderItemWidth;
      this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
    } else if (direction === -1) {
      this.index--;
      if (this.index < 0) {
        this.index = 0;
        return;
      }
      this.positionX = this.positionX + this.sliderItemWidth;
      this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
    }
    this.dotItems.forEach((el) => el.classList.remove("active"));
    this.dotItems[this.index].classList.add("active");
  };
});

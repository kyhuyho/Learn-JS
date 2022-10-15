window.addEventListener("load", function () {
  const imageCover = this.document.querySelector(".image-cover");
  const imageWrapper = this.document.querySelector(".image-wrapper");
  const image = this.document.querySelector(".image");
  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;
  let imageWrapperLeft = imageWrapper.offsetLeft;
  let imageWrapperTop = imageWrapper.offsetTop;
  imageCover.addEventListener("mousemove", hanldeHoverImage);
  function hanldeHoverImage(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style =
      "width: auto; height: auto; max-width: unset; max-height: unset";
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    console.log(imageWidth);
    const spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
    const spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;
    imageWidth = imageWidth + spaceX;
    imageHeight = imageHeight + spaceY;
    let ratioX = imageWidth / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;
    let x = (pX - imageWrapperLeft) * ratioX;
    let y = (pY - imageWrapperTop) * ratioY;
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-width: unset; max-height: unset; transform: none`;
  }
  imageCover.addEventListener("mouseleave", handleLeaveImage);
  function handleLeaveImage() {
    image.style = "";
  }
});

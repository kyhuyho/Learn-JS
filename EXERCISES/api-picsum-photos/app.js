const imageList = document.querySelector(".images");
const loadMore = document.querySelector(".load-more");
const loader = document.querySelector(".loader");
let page = 1;
const limit = 8;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
async function fetchImages(page = 1) {
  loader.style.display = "block";
  loadMore.style.display = "none";
  const response = await fetch(`${endpoint}&page=${page}`);
  const images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    loader.style.display = "none";
    loadMore.style.display = "block";
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
function imageTemplate(url) {
  const template = `<div class="image-item">
  <img src="${url}" alt="" />
</div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}
async function handleLoadMore() {
  page++;
  await fetchImages(page);
}
loadMore.addEventListener("click", handleLoadMore);
fetchImages();

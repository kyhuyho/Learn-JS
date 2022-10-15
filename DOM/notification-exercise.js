// Viết 1 fn tạo ra thông báo
function createNotification(title = "Welcome to notification") {
  const template = `<div class="noti">
  <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
  <div class="noti-content">
    <h3 class="noti-tile">${title}</h3>
    <p class="noti-desc">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
      eius, veritatis cupiditate facilis quibusdam repellat cum velit, quo
      nisi excepturi rerum commodi non impedit iste perferendis vitae, qui
      soluta repudiandae.
    </p>
  </div>
</div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
const randomData = [
  "Welcome to JS course",
  "Welcome to this tutorial",
  "Today is a good day",
];
let lastTitle; // Kiểm tra k cho trùng title
const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) createNotification(title);
  lastTitle = title;
  /* clearInterval(timer); */
}, 5000);

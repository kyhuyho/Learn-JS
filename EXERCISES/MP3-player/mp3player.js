window.addEventListener("load", function () {
  const song = this.document.querySelector("#song");
  const playButton = this.document.querySelector(".player-play");
  const prevButton = this.document.querySelector(".player-prev");
  const nextButton = this.document.querySelector(".player-next");
  const playerDuration = document.querySelector(".player-duration");
  const remaining = this.document.querySelector(".player-remaining");
  const progressBar = this.document.querySelector("#progress-bar");
  const playerImage = this.document.querySelector(".player-image");
  let playing = true;
  const list = ["holo.mp3", "summer.mp3", "home.mp3", "spark.mp3"];
  let songIndex = 0;
  playButton.addEventListener("click", handleMusicPlay);
  nextButton.addEventListener("click", function () {
    handleChangMusic(1);
  });
  prevButton.addEventListener("click", function () {
    handleChangMusic(-1);
  });
  song.addEventListener("ended", function () {
    handleChangMusic(1);
  });
  function handleChangMusic(direction) {
    if (direction === 1) {
      songIndex++;
      if (songIndex > list.length - 1) songIndex = 0;
      song.setAttribute("src", `./file/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
    } else if (direction === -1) {
      songIndex--;
      if (songIndex < 0) songIndex = list.length - 1;
      song.setAttribute("src", `./file/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
    }
  }
  function handleMusicPlay(e) {
    if (playing) {
      song.play();
      playerImage.classList.add("is-playing");
      playButton.classList.remove("fa-play");
      playButton.classList.add("fa-pause");
      playing = false;
    } else {
      song.pause();
      playerImage.classList.remove("is-playing");
      playButton.classList.remove("fa-pause");
      playButton.classList.add("fa-play");
      playing = true;
    }
  }
  function displayTimer() {
    const { duration, currentTime } = song;
    progressBar.max = duration;
    progressBar.value = currentTime;
    remaining.textContent = formatTimer(currentTime);
    if (!duration) {
      playerDuration.textContent = "0:00";
    } else {
      playerDuration.textContent = formatTimer(duration);
    }
  }
  function formatTimer(number) {
    const minutes = Math.floor(number / 60); // => lấy ra được số phút
    number = number % 60; // => lấy ra được số giây
    const seconds = Math.floor(number);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  progressBar.addEventListener("change", hanldeDragProgressBar);
  function hanldeDragProgressBar() {
    song.currentTime = progressBar.value;
  }
  const timer = this.setInterval(displayTimer, 500);
});

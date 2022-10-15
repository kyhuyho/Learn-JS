window.addEventListener("load", function () {
  const daysText = this.document.querySelector(".days");
  const hoursText = this.document.querySelector(".hours");
  const minutesText = this.document.querySelector(".minutes");
  const secondsText = this.document.querySelector(".seconds");
  function countdown(date) {
    const endDate = new Date(date).getTime();
    const currentDate = new Date().getTime();
    if (isNaN(endDate) || endDate - currentDate <= 0) return;
    setInterval(calculate, 1000);
    function calculate() {
      let days, hours, minutes, seconds;
      const now = new Date();
      const startDate = now.getTime();
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining > 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = timeRemaining;
        daysText.textContent = `0${days.toString()}`.slice(-2);
        hoursText.textContent = `0${hours.toString()}`.slice(-2);
        minutesText.textContent = `0${minutes.toString()}`.slice(-2);
        secondsText.textContent = `0${seconds.toString()}`.slice(-2);
      } else return;
    }
  }
  countdown("Fri Aug 19 2022 15:51:49 GMT+0700 (Indochina Time)");
  // this.setInterval(function () {
  //   countdown("Fri Aug 19 2022 15:51:49 GMT+0700 (Indochina Time)");
  // }, 1000);
});

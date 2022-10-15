const cardsArray = [
  {
    name: "fire",
    img: "img/fire.png",
  },
  {
    name: "youtube",
    img: "img/youtube.png",
  },
  {
    name: "flash",
    img: "img/flash.png",
  },
  {
    name: "gift",
    img: "img/gift.png",
  },
  {
    name: "tron",
    img: "img/tron.png",
  },
  {
    name: "ufo",
    img: "img/ufo.png",
  },
  {
    name: "plant",
    img: "img/plant.png",
  },
  {
    name: "burger",
    img: "img/burger.png",
  },
];
let count = 0;
let previousCard;
let firstGuess = "";
let secondsGuess = "";
const delay = 500;
const grid = document.querySelector(".grid");
function generaCard() {
  // reset innerHTML
  grid.innerHTML = "";
  const newCardsArray = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());
  newCardsArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-name", item.name);
    // front card
    const front = document.createElement("div");
    front.classList.add("front");
    // back card
    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${item.img})`;
    card.append(front, back);
    grid.appendChild(card);
  });
}
generaCard();
function matchingCard() {
  const selects = document.querySelectorAll(".selected");
  selects.forEach((item) => item.classList.add("matched"));
}
function resetGuess() {
  count = 0;
  firstGuess = "";
  secondsGuess = "";
  previousCard = null;
  const selects = document.querySelectorAll(".selected");
  const matchedAll = document.querySelectorAll(".matched");
  const cardsLength = document.querySelectorAll(".card").length;
  if (matchedAll.length === cardsLength) {
    matchedAll.forEach((item) => item.classList.remove("matched"));
    setTimeout(generaCard, delay);
  }
  selects.forEach((item) => item.classList.remove("selected"));
}
grid.addEventListener("click", function (e) {
  const clicked = e.target;
  if (
    clicked === "SECTION" ||
    clicked === previousCard ||
    clicked.parentNode.classList.contains("matched")
  )
    return;
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondsGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess && secondsGuess) {
      if (firstGuess === secondsGuess) {
        setTimeout(matchingCard, delay);
      }
      setTimeout(resetGuess, delay);
    }
    previousCard = clicked;
  }
});

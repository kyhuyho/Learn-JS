// Bài 125: document.createElement và document.appendChild
// 1. Tạo ra Element trong JS
const div = document.createElement("div");
// 2. selector.appendChild
const body = document.body;
body.appendChild(div);

// Bài 126: Thực hành phương thức document.appendChild
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem sdfgsdghshsfhg";
div.innerHTML = `<div class = "content"><h3></h3></div>`;
div.setAttribute("data-name", "Tôm");
// Bài tập tạo ra HTML như đã minh họa ở file HTML
const card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);
const cardImage = document.createElement("img");
cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);

// Bài 127: document.createTextNode
const text = document.createTextNode("Hello my name is Huy");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// Bài 128: Phương thức cloneNode
const hiClone = h1.cloneNode(true);
body.appendChild(hiClone);

// Bài 129: Phương thức hasChildNodes
console.log(h1.hasChildNodes());

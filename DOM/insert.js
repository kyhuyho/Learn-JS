// Bài 130: Phương thức insertAdjacentText
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");

// Bài 131: Phương thức insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// Bài 132: Phương thức insertAdjacentHTML
const template = `
<ul class="menu2">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>`;
document.body.insertAdjacentHTML("beforeend", template);

// Bài 115: getAttribute
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
console.log(li);
li.forEach((item) => console.log(item.getAttribute("class")));

// Bài 116: setAttribute
link.setAttribute("target", "_blank");
const listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => item.setAttribute("target", "_blank"));

// Bài 117: removeAttribute
const p = document.getElementById("spinner");
p.removeAttribute("style");

// Bài 118: hasAttribute
console.log(p.hasAttribute("id"));
if (p.hasAttribute("id")) {
  // làm gì đó
}

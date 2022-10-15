// Bài 146: Tìm hiểu document.title và document.head
// 1. document.title
console.log(document.title);
document.title = "Welcome to JS course";
// 2. document.head
console.log(document.head);
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
// document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

// Bài 147: Tìm hiểu thêm phương thức insertBefore
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// insertAdjacentElement
// document.querySelector("h3").insertAdjacentElement("beforebegin", ul);

// Bài 148: Tìm hiểu thêm phương thức replaceChild
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// convert HTMLCollection, NodeList to Array
const li = document.getElementsByTagName("li");
// Cách 1: Array.from(HTMLCollection or NodeList)
// Cách 2: [...HTMLCOLLECTION], [...NodeList]
[...li].forEach((item) => item);
console.log(li);

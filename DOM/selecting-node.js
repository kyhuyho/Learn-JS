// Bài 109: Dom là gì
// Bài 110: document.querySelector
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");
console.log(singleNode3);

// Bài 111: document.querySelectorAll
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);
for (let i = 0; i < multiNodes.length; i++) {
  console.log(multiNodes[i]);
}

// Bài 112: document.getElementsByClassName
const classNode = document.getElementsByClassName("item");
console.log(classNode);

// Bài 113: document.getElementsByTagName
const tagNode = document.getElementsByTagName("li");
console.log(tagNode);

// Bài 114: document.getElementById
const idNode = document.getElementById("spinner");
console.log(idNode);

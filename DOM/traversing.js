// Bài 133: Traversing DOM phần 1
// 1. parentNode vs parentElement
const span = document.querySelector(".span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);
// 2. removeChild
// span.parentNode.removeChild(span);
// span.remove();

// Bài 134: Traversing DOM phần 2
// 3. nextElementSibling vs previousElementSibling
const nextElementSibling = span.nextElementSibling;
console.log(nextElementSibling);
const previousLink = span.previousElementSibling;
console.log(previousLink);
// 4. childNodes vs children
console.log(span.childNodes);
console.log(span.children);
console.log(span.children[1]);
// 5. firstChild vs firstElementChild
console.log(span.firstChild);
console.log(span.firstElementChild);
// 6. lastChild vs lastElementChild
console.log(span.lastChild);
console.log(span.lastElementChild);

// Bài 135: Traversing DOM phần 3
// 7. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
console.log(span.nextElementSibling.nextElementSibling);

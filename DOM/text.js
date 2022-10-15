// Bài 119: Thuộc tính textContent
const spinner = document.querySelector("#spinner");
// spinner.textContent = "Hello new content"; // -> thay đổi nội dung nằm giữa selector
console.log(spinner.textContent);

// Bài 120: Thuộc tính innerText
console.log(spinner.textContent);
console.log(spinner.innerText);

// Bài 121: Thuộc tính innerHTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">hello html</div>`;
console.log(spinner.innerHTML);

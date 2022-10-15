// Bài 278: Các kiến thức hay khác cần biết
// 1. Sự khác nhau giưa i++ và ++i
// let i = 1;
// let j = i++;
// console.log(i, j); // => 2,1
// let a = 1;
// let b = ++a;
// console.log(a, b); // => 2,2
// // 2. Lưu ý khi return function
// function total(x, y) {
//   return; // undefined
//   x + y;
// }
// 3. 2 cách chuyển dổi dữ liệu mới
// const str = "";
// console.log(parseInt(str));
// console.log(parseFloat(str));
// console.log(Number(str));
// console.log(+str);
// if (!!str) {
//   console.log("aaa");
// }
// console.log(!!str);

// Bài 279: arguments trong function
// function number(a, b, c) {
//   // if (!arguments.length) console.log("please insert your arguments");
//   console.log(typeof arguments);
//   const args = Array.from(arguments);
//   const args2 = [...arguments];
//   console.log(arguments);
//   console.log(args2);
//   return a + b + c;
// }
// number(1, 2, 3);

// Bài 280: Câu hỏi phỏng vấn về closure
// closure in loop
// for (var i = 1; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Bài 281: Sự khác nhau giữa localStorage và sessionStorage
// Bài 282: Cách sử dụng arrow function hiệu quả
// 1. Event hanlders
// const input = document.querySelector(".input");
// input.addEventListener("keyup", () => {
//   console.log(this.value);
// });
// // 2. Object
// const student = {
//   counter: 0,
//   increment: () => {
//     return ++this.counter;
//   },
// };
// console.log(student.increment());

// Bài 283: Đệ quy là gì ?
// function countDown(number) {
//   console.log(number);
//   const otherNumber = number - 1;
//   if (otherNumber > 0) {
//     countDown(otherNumber);
//   }
// }
// countDown(3);

// Bài 286: Tìm hiểu object Set
// const mySet = new Set();
// mySet.add(1);
// mySet.add("tom");
// console.log(mySet);
// mySet.has(1); // => true
// mySet.delete("tom");
// console.log(mySet);
// console.log(mySet.size);
// mySet.clear();
// console.log(mySet.size);
// // Input: arr
// // Output: [1,2,3,4,5,6,7,9]
// const arr = [1, 2, 3, 4, 1, 1, 1, 4, 4, 4, 5, 5, 5, 7, 9];
// // array to Set
// const mySet2 = new Set(arr);
// console.log(mySet2);
// // for of
// for (let item of mySet2) {
//   console.log(`item: ${item}`);
// }
// // Set to Array
// const newArr = Array.from(mySet2);
// console.log(newArr);

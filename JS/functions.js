// Bài 29: Function cơ bản
// Viết function tính tổng của 2 số a và b
// function sum(a = 0, b = 0) {
//   const total = a + b;
//   return total;
// }
// console.log(sum(500, 1000)); // => 1500

// Bài 30: function cơ bản phần 2
// Lưu funtion vào 1 biến rồi gọi lại sau này
// function add(a = 0, b = 0) {
//   return a + b;
// }
// const sum2 = add; // gán function add cho biến sum2 nhưng chưa được gọi
// console.log(sum2(300, 400)); // => 700
// Tham số truyền vào là function
// Tính trung bình của 2 số a và b
// function average(a, b, fn) {
//   const total = fn(a, b);
//   return total / 2;
// }
// let result = average(200, 300, sum2);
// console.log(result); // => 250

// Bài 31: function cơ bản phần 3
// Anonymous function(function expression)
// const logName = function () {
//   console.log("your name");
// };
// logName(); // => "your name"
// // IIFE -> Immmediately Invoked Function Execution
// (function () {
//   console.log("This is IIFE function");
// })(); // => "This is IIFE function"

// Bài 32: global scope và function scope
// Global scope
// let myName = "Tôm"; // global scope
// function logYourName() {
//   let myName2 = "Huy"; // function scope
//   myName2 = myName;
//   console.log(myName2);
// }
// logYourName();

// Bài 33: Block scope và từ khoá var
// if (2 > 1) {
//   let message = "Hello Tôm"; // block scope
//   var message2 = "Hello Huy"; // global scope
// }
// alert(message2); // => "Hello Huy"

// Bài 34: Closure cơ bản
// Lexical scope
// let aNewName = "Tôm"; // global scope
// function sayHello() {
//   let message = "Hi"; // function scope
//   console.log(`${message} ${aNewName}`);
// }
// sayHello(); // => "Hi Tôm"

// Closure
// parent function
// function sayHello2() {
//   let message = "Hi";
//   function sayHi() {
//     // inner function
//     console.log(message);
//   }
//   return sayHi;
// }
// let hello = sayHello2();
// hello(); // => "Hi"

// function sayHello3(message) {
//   return function hiYourName(name) {
//     console.log(`${message} ${name}`);
//   };
// }
// let hello = sayHello3("Welcome to JS");
// hello("Closure"); // => "Welcome to JS Closure"

// function anotherFunction() {
//   let otherMessage = "Hello";
//   function sayHi() {
//     console.log(otherMessage);
//   }
//   return sayHi;
// }
// let callFunc = anotherFunction();
// callFunc(); // => "Hello"

// Bài 39: arrow function cơ bản
// Arrow function: annoymous function
// Normal function: annoymous function
// const square = function (x) {
//   return x * x;
// };
// console.log(square(5)); // => 25
// Arrow function
// const square2 = (x) => {
//   return x * x;
// };
// console.log(square2(4)); // => 25
// Rút gọn khi return
// const square3 = (x) => x * x;
// console.log(square3(3)); // => 9

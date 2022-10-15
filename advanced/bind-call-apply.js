// Bài 294: Tìm hiểu Bind phần 1
const student = {
  firstName: "ho",
  lastName: "ky huy",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
// const selector = document.querySelector.bind(document);
const $ = document.querySelector.bind(document);
const selectors = document.querySelectorAll.bind(document);
const button = $(".button");
button.addEventListener("click", student.fullName.bind(student));
// console.log(selector(".button"));
function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}

// function logErrToday(message) {
//   log("Error", "Today", message);
// }
// logErrToday("Server OK!");
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");

// Bài 296: Sự khác nhau giữa call và apply
const person = {
  firstName: "tom",
  lastName: "Frontend developer",
};
function sayHello(str1, str2) {
  console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}
// Call
sayHello.call(person, "hello", "good morning");
// Apply
sayHello.apply(person, ["hi", "good evening"]);
const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
arr.push.apply(arr, arr2);
console.log(arr);

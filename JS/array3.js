// Bài 72: By value và by references
// By value
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // => true
// By references
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // => false

// Bài 73: Cách so sánh 2 mảng cơ bản
// JSON
// JSON.stringify(value)
// JSON.parse

// [1, 2, 3].toString() -> "1, 2, 3"
// JSON.stringify([1, 2, 3]) -> "[1, 2, 3]"
// JSON.parse("[1, 2, 3]") -> [1, 2, 3]
console.log(JSON.stringify([1, 2, 3])); // => "[1, 2, 3]"
console.log(JSON.parse("[1, 2, 3]")); // => (3) [1, 2, 3]
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // => true

// Bài 74: 2 cách để sao chép mảng cần biết
const students = ["a", "b", "c", "d", "e"];
// students.pop();
// console.log(students); // => (4) ['a', 'b', 'c', 'd']
// Cách 1: slice()
const sliceStudents = students.slice();
sliceStudents.pop();
console.log(sliceStudents); // => (4) ['a', 'b', 'c', 'd']
// Cách 2: spread operator
const spreadStudents = [...students];
console.log(spreadStudents); // => (5) ['a', 'b', 'c', 'd', 'e']

// Bài 75: 2 cách để gộp mảng cần nắm
// Cách 1: concat
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergerArray = array1.concat(array2, array3);
console.log(mergerArray); // => (6) [1, 2, 3, 4, 5, 6]
// Cách 2: spread operator
const mergerArray2 = [...array1, ...array2, ...array3];
console.log(mergerArray2); // => (6) [1, 2, 3, 4, 5, 6]

// Bài 76: Destructuring là gì ? Bài 77: Tìm hiểu rest parameter
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const a = toys[0];
const b = toys[1];
const c = toys[2];
console.log(a, b, c); // => ball sword arrow
// Destructuring
const [ball, sword, arrow, ...rest] = toys;
console.log(ball, sword, arrow); // => ball sword arrow
console.log(rest); // =>(3) ['magic', 'water', 'fire']
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5);

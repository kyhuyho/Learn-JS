// Bài 55: Giới thiệu về mảng
// array literal
const students1 = [];
// array constructor
const students2 = new Array();
// Ví dụ một mảng
// Mảng đơn giản [0, false, undefined, null, "Tôm"]
// Mảng phức tạp [0, false, undefined, null, "Tôm", ["Tôm", false, 100, []]]
// [1, 2, 3, 4, 5] ["a", "b", "c", "d"] [false, true, false]
// []: empty array

// Bài 55.5: Giới thiệu về mảng bổ sung
const students3 = ["Huy", "Ngoc", "Tom", "Ty"];
// index
// length
// truy xuất trong mảng -> students[index]
// console.log(students3[0]); // => "Huy"
// console.log(students3[1]); // => "Ngoc"
// console.log(students3[4]); // => undefined
// console.log(students3[students3.length - 1]); // => "Ty"

// Bài 56: Các phương thức trong mảng phần 1
const students4 = ["Huy", "Ngoc", "Tom", "Ty", "Tom"];
// length
console.log("-------array.length----------");
console.log(students4.length); // => 5
// reverse
console.log("-------array.reverse----------");
// console.log(students4.reverse()); // => (4) ['Ty', 'Tom', 'Ngoc', 'Huy']
// join
console.log("-------array.join----------");
console.log(students4.join()); // => "Ty,Tom,Ngoc,Huy"
console.log(students4.join(" ")); // => "Ty Tom Ngoc Huy"
// includes;
console.log("-------array.includes----------");
console.log(students4.includes("Huy")); // => true
console.log(students4.includes("H")); // => false

// // Bài 57: Các phương thức trong mảng phần 1
// indexOf
console.log("-------array.indexOf----------");
console.log(students4.indexOf("Tom")); // => 2
// lastIndexOf
console.log("-------array.lastIndexOf----------");
console.log(students4.lastIndexOf("Tom")); // => 4
// push
console.log("Trước khi thêm vào cuối");
console.log(students4); // => (5) ['Huy', 'Ngoc', 'Tom', 'Ty', 'Tom']
console.log("Sau khi thêm vào cuối");
students4.push("JS");
console.log(students4); // => (6) ['Huy', 'Ngoc', 'Tom', 'Ty', 'Tom', 'JS']
// unshift
console.log("Trước khi thêm vào đầu");
console.log(students4); // => (6) ['Huy', 'Ngoc', 'Tom', 'Ty', 'Tom', 'JS']
console.log("Sau khi thêm vào đầu");
students4.unshift("Frontend");
console.log(students4); // => (7) ['Frontend', 'Huy', 'Ngoc', 'Tom', 'Ty', 'Tom', 'JS']
// pop
console.log("Trước khi xóa phần tử cuối cùng");
console.log(students4); // => (7) ['Frontend', 'Huy', 'Ngoc', 'Tom', 'Ty', 'Tom', 'JS']
console.log("Sau khi xóa phần tử cuối cùng");
students4.pop();
console.log(students4); // => (6) ['Frontend', 'Huy', 'Ngoc', 'Tom', 'Ty', 'Tom']
// shift
console.log("Trước khi xóa phần tử đầu tiên");
console.log(students4); // => (6) ['Frontend', 'Huy', 'Ngoc', 'Tom', 'Ty', 'Tom']
console.log("Sau khi xóa phần tử đầu tiên");
students4.shift();
console.log(students4); // => (5) ['Huy', 'Ngoc', 'Tom', 'Ty', 'Tom']

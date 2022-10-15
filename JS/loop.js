const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Bài 78: Vòng lặp for cơ bản phần 1
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`The index is ${i}`);
// }

// Bài 79: Vòng lặp for cơ bản phần 2
// for (let i = 0; i < numbers.length; i++) {
//   // Nếu giá trị là 8 thì dừng vòng lặp
//   console.log(`The value is ${numbers[i]}`);
//   if (numbers[i] === 8) break;

//   // Nếu giá trị là 8 thì bỏ qua giá trị đó
//   if (numbers[i] === 8) continue;
//   console.log(`The value is ${numbers[i]}`);
// }

// Bài 80: Vòng lặp for cơ bản phần 3
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(`The value is ${numbers[i]}`);
// }

// Bài 81: Vòng lặp for cơ bản phần 4
// nested loop
// Mảng 2 chiều: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(`The value is ${numbers[i]}`);
//   for (let j = numbers.length - 1; j >= 0; j--) {
//     console.log(j);
//   }
// }
// infinite loop
/* for(let i = 2; 2 > i; i--) {
  // code
} */

// Bài 82: Bài tập cơ bản về vòng lặp for
// 1. Sao chép mảng dùng vòng for
// let copyArr = [];

// for (let i = 0; i < numbers.length; i++) {
//   copyArr.push(numbers[i]);
// }
// console.log(copyArr); // => (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Đảo ngược từ "i love" -> "evol i"
// let str = "i love";
// let result = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   result += str[i];
// }
// console.log(result); // => "evol i"

// Bài 83: Vòng lặp while và do while
// loop while
// let number = 1;
// while (number < 10) {
//   console.log("number is " + number);
//   number++;
// }

// loop do...while
// let number2 = 1;
// do {
//   number2++;
//   console.log("number2 is " + number2);
// } while (number2 < 10);

// Bài 84: Vòng lặp for of
let a = [];
for (let value of numbers) {
  a.push(value);
  // console.log(value);
}
console.log(a);
for (let c of "Tôm") {
  console.log(c);
}

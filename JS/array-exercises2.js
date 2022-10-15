// Bài 85: Bài tập chương 6 số 1 và 2
/* 
 1. Cho 1 mảng gồm nhiều giá trị [1, 1000, false, null, "Tôm", "", undefined, "JS", NaN, [1, 2, 3]]. Viết ct loại bỏ
 các giá trị falsy ra khỏi mảng và giữ lại giá trị truthy
*/
const array = [
  1,
  1000,
  false,
  null,
  "Tôm",
  "",
  undefined,
  "JS",
  NaN,
  [(1, 2, 3)],
];
const filterFalsy = array.filter((value) => Boolean(value) === true);
console.log(filterFalsy);
/* 
 2. Cho 1 mảng phức tạp [[1, 2, 3, [false, null]], [1, 5, 6, ["JS"]], [888, 666, [90]]]. Và kết quả trả ra là
 [1, 2, 3, false, null, 1, 5, 6, "JS", 888, 666, 90]
*/
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["JS"]],
  [888, 666, [90]],
];
const result = complexArray.flat(10);
console.log(result);

// Bài 86: Bài tập chương 6 số 3
// 3. Đảo ngược 1 số nguyên. Ví dụ: 1234 -> 4321, -567 -> -765
function reverseNumber(number) {
  console.log(typeof number);
  if (typeof number !== "number") return null;
  const value =
    parseInt(String(number).split("").reverse().join("")) * Math.sign(number);
  return value;
}
console.log(reverseNumber(-1234)); // => -4321

// Bài 87: Bài tập chương 6 số 4
/*
 4. Viết ct có tên là fizzBuzz với đầu vào là 1 số nguyên, và cho chạy từ 1 đến số nguyên đó rồi kiểm tra nếu có số chia hết cho 2
 thì in ra chữ "Fizz", nếu có số chia hết cho 3 thì in ra chữ "Buzz", nếu có số chia hết cho 2 và 3 thì in ra chữ "FizzBuzz"
*/
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log("FizzBuzz");
    else if (i % 2 === 0) console.log("Fizz");
    else if (i % 3 === 0) console.log("Buzz");
  }
}
fizzBuzz(15);

// Bài 88: Bài tập chương 6 số 5
/*
 5. Cho 1 chuỗi bất kỳ đếm số ký tự `vowels` có trong chuỗi
 `vowels` là các ký tự u e o a i
  VD: "Tom" -> 1
*/
function countVowels(str) {
  let count = 0;
  const characters = "ueoai";
  // for (let c of str.toLowerCase()) {
  //   if (characters.includes(c)) count++;
  // }

  for (let i = 0; i < str.length; i++) {
    if (characters.includes(str[i].toLowerCase())) count++;
  }
  console.log(count);
}
countVowels("TOM"); // => 1

// Bài 89: Bài tập chương 6 số 6
/* 
 6. Cho 1 mảng giá trị số [1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]. Viết 1 fn trả về 1 mảng với các giá trị unique
 -> [1, 2, 3, 5, 7, 6]
*/
function unique(arr) {
  let result = [];
  if (Array.isArray(arr) === false) return result;
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i]) === false) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(unique([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6])); // => (6) [1, 2, 3, 5, 7, 6]

// Bài 90: Bài tập chương 6 số 7
/* 
 7. Viết 1 fn xử lý 1 mảng lớn thành nhiều mảng con dựa vào 1 số nguyên đầu vào. 
 Ví dụ: ([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
*/
function splitArray(array, number) {
  let result = [];
  let index = 0;
  // while (index < array.length) {
  //   result.push(array.slice(index, number + index));
  //   index = index + number;
  // }

  for (let i = 0; i < array.length; i = i + number) {
    result.push(array.slice(i, number + i));
  }
  console.log(result);
}
splitArray([1, 2, 3, 4, 5, 6], 3);

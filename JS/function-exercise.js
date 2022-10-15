// Bài 36: Bài tập function số 1
// Viết hàm so sánh 2 số a, b tìm ra số lớn hơn
// function compare(a = 0, b = 0) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     console.log("Please enter a valid number");
//     return 0;
//   }
//   return Math.max(a, b);
// }
// console.log(compare(100, "1000"));

// Bài 37: Bài tập function số 2
// In hoa chữ cái đầu trong chuỗi
// function capitalize(word = "") {
//   if (word.length === 0) return null;
//   let newWord = word.charAt(0).toUpperCase();
//   let otherWord = word.slice(1).toLowerCase();
//   return `${newWord}${otherWord}`;
// }
// console.log(capitalize("hUY")); // => "Huy"

// Bài 38: Bài tập function số 3
// Viết hàm sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare
function compare(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter a valid number");
    return 0;
  }
  return Math.max(a, b);
}
function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}
function printMax(number) {
  console.log("Max number is " + number);
}
console.log(useCallback(500, 1000, printMax));

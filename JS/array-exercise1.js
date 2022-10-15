// Bài 69: Bài tập về mảng số 1
// Đảo ngược 1 chuỗi. Ví dụ: "My name is Tôm" -> "Tôm is name My"
function reverseString(str) {
  if (str === "" || typeof str !== "string") return null;
  const reverseStr = str.split(" ").reverse().join(" ");
  return reverseStr;
}
console.log(reverseString("My name is Tôm")); // => "Tôm is name My"

// Bài 70: Bài tập về mảng số 2
// Đảo ngược 1 chuỗi bao gồm các ký tự. Ví dụ: "i love" -> "evol i"
function reverseWord(str) {
  if (str === "" || typeof str !== "string") return null;
  const arrStr = str
    .split(" ")
    .map((item) => item.split("").reverse().join(""));
  const result = arrStr.reverse().join(" ");
  return result;
}
console.log(reverseWord("i love you")); // => "uoy evol i"

// Bài 71: Bài tập về mảng số 3
// In hoa chữ cái đầu trong chuỗi: Ví dụ: "my name is tôm" -> "My Name Is Tôm"
function capitalizeWord(word = "") {
  if (word.length === 0) return null;
  let newWord = word.charAt(0).toUpperCase();
  let otherWord = word.slice(1).toLowerCase();
  return `${newWord}${otherWord}`;
}
function capitalizeStr(str) {
  if (str === "" || typeof str !== "string") return null;
  const result = str
    .split(" ")
    .map((item) => capitalizeWord(item))
    .join(" ");
  return result;
}
console.log(capitalizeStr("my name is tôm")); // => "My Name Is Tôm"

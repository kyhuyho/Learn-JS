// Bài 17: Tìm hiểu hàm Number
// console.log(Number("4.5")); // => 4.5
// console.log(Number("4")); // => 4
// console.log(Number("abc")); // => NaN: là 1 giá trị
// console.log(Number(undefined)); // => NaN
// console.log(Number(null)); // => 0
// console.log(Number(false)); // => 0
// console.log(Number(true)); // => 1
// console.log(Number("")); // => 0
// console.log(Number(NaN)); // => NaN
// console.log(Number(0)); // => 0

// Bài 18: Tìm hiểu hàm String
// console.log(String(4.5)); // => "4.5"
// console.log(String(null)); // => "null"
// console.log(String(undefined)); // => "undifined"
// console.log(String(NaN)); // => "NaN";
// console.log(String(false)); // => "false"
// console.log(String(true)); // => "true"

// Bài 19: Tìm hiểu hàm Boolean
// console.log(Boolean(0)); // => false
// console.log(Boolean(undefined)); // => false
// console.log(Boolean("")); // => false
// console.log(Boolean(null)); // => false
// console.log(Boolean(NaN)); // => false
// console.log(Boolean(false)); // => false
// console.log(Boolean("HJGSDF")); // => true

// Bài 20: Type coercion là gì ?
// console.log(1 + 2); // => 3
// console.log(10 + 10); // => 20
// console.log(10 + "10"); // "1010"  -> console.log(String(10) + "10");
// console.log("10" + 10); // "1010"  -> console.log("10" + String(10));
// console.log("10" - 10); // => 0  -> console.log(Number(10) - 10);
// console.log(null + ""); // => "null"  -> console.log(String(null) + "");
// console.log(null + undefined); // => NaN  -> console.log(Number(null) + Number(undefined));
// console.log("" - 1); // => -1  -> console.log(Number("") - 1);
// console.log(false - true); // => -1  -> console.log(Number(false) - Number(true));
// console.log(null + 10); // => 10  -> console.log(Number(null) + 10);

// Bài 21: Toán tử so sáng cơ bản
// console.log(5 > 7); // => false
// console.log(50 > 7); // => true
// console.log(6 >= 6); // => true
// console.log(6 <= 6); // => true

// Bài 22: Toán tử logic cơ bản
// console.log(5 > 7 && 8 > 3); // => false
// console.log(5 > 7 || 8 > 3); // => true
// const amIWrong = false;
// console.log(!amIWrong); // => true

// Bài 23: So sánh == vs ===
// console.log(10 == 10); // => true
// console.log(10 == "10"); // => true  -> console.log(10 == Number("10"));
// console.log(true == 1); // => true   -> console.log(Numbr(true) == 1);
// console.log(1 == "01"); // => true  -> console.log(1 == Number("1"));
// console.log(null == ""); // => false  -> console.log(null == Number(""));
// console.log(true == "true"); // => false  -> console.log(Number(true) == Number("true"));
// console.log(typeof 10); // => number
// console.log(typeof "10"); // => string
// console.log(10 === "10"); // => false
// console.log(10 !== "10"); // => true

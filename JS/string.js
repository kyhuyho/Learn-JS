// Bài 7: Giới thiệu kiểu dữ liệu string
// "Hello World";
// "My name is Huy";
// `I am Frontend developer`;

// Bài 8: Sử dụng string cơ bản
// const name = "Tom";
// const job = "Frontend Developer";
// console.log(name); // => "Tom"
// console.log(typeof name); // string
// const newStr = "My name is Huy and I am Frontend Developer";
// const newStr2 = "My name is " + name + " and I am " + job;
// console.log(newStr2); // => "My name is Tom and I am Frontend Developer"
// const newStr3 = `My name is ${name} and I am ${job}`;
// console.log(newStr3); // => "My name is Tom and I am Frontend Developer"

// Bài 9: index và length trong string cần nắm
// const newStr4 = "My name is Tom and I am Frontend Developer";
// console.log(newStr4.length); // => 42

// Bài 10: Các phương thức trong string phần 1
// const myStr = "Frontend Developer D";
// console.log(myStr.split(" ")); // => ['Frontend', 'Developer', 'D']
// console.log(myStr.split("")); // => ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', 'D']
// console.log(myStr.split("/")); // => ['Frontend Developer D']
// console.log(myStr.toLowerCase()); // => "frontend developer d"
// console.log(myStr.toUpperCase()); // => "FRONTEND DEVELOPER D"
// console.log(myStr.startsWith("Frontend")); // => true
// console.log(myStr.endsWith("Developer")); // => false
// console.log(myStr.includes("end")); // => true
// console.log(myStr.includes("abc")); // => false
// console.log(myStr.indexOf("D")); // => 9
// console.log(myStr.lastIndexOf("D")); // => 19

// Bài 11: Các phương thức trong string phần 2
// const myStr2 = "Frontend Developer D";
// console.log(myStr2.replace("Developer", "Designer")); // => "Frontend Designer D"
// console.log(myStr2.repeat(3)); // => "Frontend Developer DFrontend Developer DFrontend Developer D"
// console.log(myStr2.slice(0, 8)); // => "Frontend"
// console.log(myStr2.slice(0)); // => "Frontend Developer D"
// console.log(myStr2.slice(-1)); // => "D"
// console.log(myStr2.slice(-5)); // => "per D"
// const myStr3 = "    Frontend Developer D        ";
// console.log(myStr3.trim()); // => "Frontend Developer D"
// console.log(myStr3.trimStart()); // =>"Frontend Developer D"
// console.log(myStr3.trimEnd()); // => "Frontend Developer D"
// const myStr4 = "ABC";
// console.log(myStr4.charAt(1)); // => "B"

// Bài 12: Phân biệt substr và substring
// const myStr5 = "Frontend";
// console.log(myStr5.substr(1, 5)); // => "ronte"
// console.log(myStr5.substring(1, 5)); // => "ront"

// Bài 13: Sử dụng nhiều phương thức của string cùng lúc
/* Loại bỏ khoảng trống 2 bên, thay chữ `Developer D` thành chữ `Developer and Designer`, đưa tất cả về IN HOA,
sau đó repeat 2 lần
*/
// const myStr6 = "    Frontend Developer D        ";
// console.log(
//   `Result of MyStr6: ${myStr6
//     .trim()
//     .replace("Developer D", "Developer and Designer")
//     .toUpperCase()
//     .repeat(2)}`
// );

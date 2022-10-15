// Bài 230: Giới thiệu Regular expression
const re1 = /hello/;
const re2 = new RegExp("hello");
console.log(re1.test("hello world")); // => true

// Bài 231: Anchor
/hi/.test("hi"); // => true
/hi$/.test("welcome to hi"); // => true
/hi$/.test("welcome to hello"); // => false
/^hi/.test("hi welcome to hi"); // => true
/^hi/.test("welcome to hi"); // => false

// Bài 232: Ranges
/[a-z]/.test("a"); // => true
/[a-z]/.test("A"); // => false
/[A-Z]/.test("Z"); // => true
/[A-Z]/.test("x"); // => false
/[0-9]/.test("10000"); // => true
/[0-9]/.test("abc"); // => false
/[a-zA-Z0-9]/.test("123ABCabc"); // => true
/[^a-z]/.test("a"); // => false

// Bài 233: Meta characters
/\d/.test("1234"); // => true
/\D/.test("123"); // => false
/\w/.test("_"); // => true
/\W/.test("_"); // => false
/\s/.test(" "); // => true
/\S/.test(" "); // => false

// Bài 234 235: Quantifiers
const str1 = "Welcome to 202212224356346";
console.log(str1.match(/\d/)[0]);
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);
const str2 = "colouuuur color or colour colour colouurrrrrr colouuuuuur?";
console.log(str2.match(/colou?r/g));
const str3 = "welcome 2 11141234";
console.log(str3.match(/\d*/g));

// Bài 236: Group
/(\d{3})?(\w+)/.test("123"); // => true

// Bài 237: Boundaries và escaping
// 1. escaping
/\?/.test("?");
/\*/.test("*");
// 2. boudaries
// \b
"my name is tom".match(/\btom/g); // => ['tom']
// \B
"my name istom".match(/\Btom/g); // => ['tom']

// Bài 238: Replace với regex
const str4 = "hello welcome hello to my hello";
console.log(str4.replace("hello", "tom")); // => "tom welcome hello to my hello"
str4.replace(/hello/g, "tom"); // => 'tom welcome tom to my tom'
"welcome 1234567".match(/\d+/g);

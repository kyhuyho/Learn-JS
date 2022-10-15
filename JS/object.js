// Bài 91: Tìm hiểu object cơ bản phần 1
// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
// Ví dụ về object
const student = {
  name: "Huy",
  age: 20,
  male: true,
  "last-name": "Tôm",
  hi: function () {
    console.log("Hello Huy");
  },
};

// Bài 92: Tìm hiểu object cơ bản phần 2
// Truy xuất giá trị của object
// Dot notation
console.log(student.name); // => "Huy"
// console.log(student.last - name); -> sai
// Bracket notation
console.log(student["age"]); // => 20
console.log(student["last-name"]); // => "Tôm"
// Thay đổi giá trị của object
student.age = 21;
student.male = "male";
console.log(student);
// Thêm giá trị trong object
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function () {
  console.log("hello");
};
console.log(student);
// Xóa giá trị trong object
delete student["last-name"];

// Bài 93: Tìm hiểu for in trong object
for (let key in student) {
  if (key === "name") {
    console.log("hello name");
  }
  console.log(`${key}:${student[key]}`);
}

// Bài 94: Tìm hiểu phương thức Object.keys
const keys = Object.keys(student);
console.log(keys); // => (7) ['name', 'age', 'male', 'hi', 'isDeveloper', 'is-developer', 'hello']
console.log(keys.length); // => 7

// Bài 95: Tìm hiểu phương thức Object.values
const values = Object.values(student);
console.log(values); // => (7) ['Huy', 21, 'male', ƒ, true, false, ƒ]

// Bài 96: Tìm hiểu phương thức Object.entries
const entries = Object.entries(student);
console.log(entries);

// Bài 97: Tìm hiểu phương thức Object.assign
const a = {
  firstName: "huy",
};
const b = {
  lastName: "ho",
};
const c = Object.assign(a, b);
console.log(c);
// spread operator
const d = { ...a, ...b };
console.log(d);

// Bài 98: Tìm hiểu phương thức Object.freeze
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);

// Bài 99: Tìm hiểu phương thức Object.seal
const user = {
  userName: "Tôm",
};
const newUser = Object.seal(user);
newUser.userName = "Ho Ky Huy";
newUser.lastName = "john"; // -> ko thêm được
console.log(newUser);

// Bài 100: Cách sao chép một object
const user2 = {
  userName: "Tôm",
};
// const newUser2 = user2;
const newUser2 = { ...user2 };
newUser2.userName = "HoKyHuy";
console.log(user2);
console.log(newUser2);

// Bài 101: Cách sao chép một object phức tạp
const user3 = {
  userName: "Tom",
  school: {
    name: "ĐHBK",
    room: {
      name: "IT",
    },
  },
};
// Object.assign({}, Object)
const newUser3 = Object.assign({}, user3);
// newUser3.school.name = "Designer";
console.log(newUser3);
// spread operator
const newUser4 = { ...user3 };
console.log(newUser4);
// Clone nested object
const newUser5 = JSON.parse(JSON.stringify(user3));
newUser5.school.name = "Designer";
console.log(newUser5);

// Bài 102: Từ khoá this trong object
const student2 = {
  name: "Huy",
  age: 20,
  male: true,
  "last-name": "Tôm",
  hi: function () {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  },
  fullName: {
    name: "Ho Ky Huy",
  },
};
student2.hi();

// Bài 103: Optional chaining
if (student2.fullName) {
  if (student2.fullName.name) {
    console.log(student2.fullName.name);
  }
}
// Optional chaining
console.log(student2.fullName?.name);

// Bài 104: Destructuring object
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// Destructuring object
const { name, age, male, ...rest } = student2;
console.log(name, age, male);
console.log(rest);

// Cách 1: Normal function
function whatYourInfo1(name, age, school) {
  console.log(name, age, school);
}
whatYourInfo1("Tôm", 20, "ĐHBK");
// Cách 2: function with object parameter
function whatYourInfo2(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  age: 20,
  school: "ĐHBK",
  name: "Tôm",
};
whatYourInfo2(newObj);
// Cách 3: object destructuring parameter
function whatYourInfo3({ name, age, school }) {
  console.log(name, age, school);
}
const newObj2 = {
  age: 20,
  school: "ĐHBK",
  name: "Tôm",
};
whatYourInfo3(newObj2);

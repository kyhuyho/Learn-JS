// Bài 292: constructor function là gì ?
let student = {
  name: "tom",
  age: 20,
};
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `your name is ${this.name}`;
  };
}
let student2 = new Student("join", 30);
console.log(student2);
console.log(student2.getName());

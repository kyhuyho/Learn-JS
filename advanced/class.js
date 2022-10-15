// Bài 298: Giới thiệu class
// 1. Constructor function/prototype way
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   return `${this.name}`;
// };
// Person.prototype.setName = function (newName) {
//   this.name = newName;
// };
// const tom = new Person("tom");
// console.log(tom.getName());
// tom.setName("pro");
// console.log(tom.getName());
// 2. Class
// class Person2 {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(newName) {
//     this.name = newName;
//   }
// }
// const huy = new Person2("huy");
// console.log(huy.getName());
// huy.setName("huyho");
// console.log(huy.getName());
// Bài 299: setter và getter
// class Person3 {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     this._name = newName;
//   }
// }
// const huy = new Person3("huy");
// console.log(huy.name);
// huy.name = "tom";
// console.log(huy.name);

// Bài 300: class expression
// let Student = class {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     this._name = newName;
//   }
// };
// const t = new Student("Tom");
// console.log(t.name);

// function company(aClass) {
//   return new aClass();
// }
// let hello = company(
//   class {
//     sayHello() {
//       console.log("hello");
//     }
//   }
// );
// hello.sayHello();

// Bài 301: static method là gì ?
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//   static compare(a, b) {
//     return a.date - b.date;
//   }
// }
// let articles = [
//   new Article("HTML", new Date(2021, 1, 1)),
//   new Article("CSS", new Date(2021, 0, 1)),
//   new Article("JS", new Date(2021, 11, 1)),
// ];
// articles.sort(Article.compare);
// console.log(articles[0].title);

// Bài 302: static property là gì ?
// class Item {
//   constructor(name) {
//     this.name = name;
//     this.constructor.count++;
//   }
//   static count = 0;
//   static getCount() {
//     return Item.count;
//   }
// }

// const pencil = new Item("Pencil");
// const laptop = new Item("Laptop");
// console.log(Item.getCount());

// Bài 303: Tìm hiểu super và extends
// class Animal {
//   constructor(legs) {
//     this.legs = legs;
//   }
//   walking() {
//     console.log(`walking on ${this.legs} legs`);
//   }
// }
// class Bird extends Animal {
//   constructor(legs) {
//     super(legs);
//   }
//   fly() {
//     console.log("I can flying");
//   }
// }
// let bird = new Bird(2);
// bird.fly();
// bird.walking();

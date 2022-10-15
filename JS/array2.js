// Bài 58: Tìm hiểu phương thức slice
console.log("--------array.slice-----------");
const animal = ["tiger", "lion", "horse", "elephant"];
// slice()
const animal2 = animal.slice();
console.log(animal2); // => (4) ['tiger', 'lion', 'horse', 'elephant']
// slice(start)
const animal3 = animal.slice(1);
console.log(animal3); // => (3) ['lion', 'horse', 'elephant']
// slice(start, end)
const animal4 = animal.slice(1, 3);
console.log(animal4); // => (2) ['lion', 'horse']
// slice(số âm)
const animal5 = animal.slice(-3);
console.log(animal5); // => (3) ['lion', 'horse', 'elephant']

// Bài 59: Tìm hiểu phương thức splice
console.log("--------array.splice-----------");
const pets = ["dog", "cat", "bird", "dragon"];
// splice(start)
// const pets2 = pets.splice(2);
// console.log(pets2); // => (2) ['bird', 'dragon']
// const pets3 = pets.splice(2);
// console.log(pets); // => (2) ['dog', 'cat']
// splice(start, deleteCount)
// const pets4 = pets.splice(0, 2);
// console.log(pets); // => (2) ['bird', 'dragon']
// splice(start, deleteCount, item1, item2, itemN)
// const pets5 = pets.splice(0, 2, "dinasour", "pig", false, 10);
// console.log(pets); // => (6) ['dinasour', 'pig', false, 10, 'bird', 'dragon']

// Bài 60: Tìm hiểu phương thức sort
console.log("--------array.sort-----------");
const random = [1, 9999, 10, 5, 09];
console.log(random.sort()); // => (5) [1, 10, 5, 9, 9999]
// Cách 1:
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // Sắp xếp theo tăng dần
  if (a < b) return -1; // Sắp xếp theo giảm dần
});
// Cách 2:
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3); // => (5) [1, 5, 9, 10, 9999]

// Bài 61: Tìm hiểu phương thức find
console.log("--------array.find-----------");
const number = [1, 9999, 10, 5, 09];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
// Cách 1:
const findYourNumber = number.find((element, index) => element > 10);
// Cách 2:
const findYourNumber2 = number.find(function (element) {
  return element > 10;
});
console.log(findYourNumber); // => 9999

// Bài 62: Tìm hiểu phương thức findIndex
console.log("--------array.findIndex-----------");
const findYourIndex = number.findIndex((element, index) => element > 10);
console.log(findYourIndex); // => 1

// Bài 63: Tìm hiểu phương thức sort bổ sung
const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4); // => (5) [9999, 10, 9, 5, 1]

// Bài 64: Tìm hiểu phương thức map
console.log("--------array.map-----------");
const listNumber = [1, 2, 3, 4, 5];
// Trả ra 1 mảng mới mà các giá trị trong mảng cũ nhân 2
// Cách 1:
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
// Cách 2:
const listNumberDouble2 = listNumber.map((value, index, array) => value * 2);
console.log(listNumberDouble2); // => (5) [2, 4, 6, 8, 10]

// Bài 65: Tìm hiểu phương thức forEach
console.log("--------array.forEach-----------");
// Trả ra 1 mảng mới mà các giá trị trong mảng cũ nhân 3
const listNumberTripple = listNumber.forEach(
  (value, index, array) => value * 3
);
console.log(listNumberTripple); // => undefined

// Bài 66: Tìm hiểu phương thức filter
console.log("--------array.filter-----------");
// Tìm những phần tử lớn hơn 3
const greaterThanThree = listNumber.filter((value, index, array) => {
  return value > 3;
});
console.log(greaterThanThree); // => (2) [4, 5]

// Bài 67: Tìm hiểu phương thức some và every
console.log("--------array.some-----------");
const someNumber = listNumber.some((value, index, array) => value > 3);
console.log(someNumber); // => true
console.log("--------array.every-----------");
const everyNumber = listNumber.every((value, index, array) => value > 3);
console.log(everyNumber); // => false

// Bài 68: Tìm hiểu phương thức reduce
console.log("--------array.reduce-----------");
// Tính tổng các giá trị trong mảng
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber); // => 15

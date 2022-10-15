// Bài 105: Bài tập chương 7 số 1
// 1. Viết 1 fn kiểm tả value có phải là object hay ko?
function isObject(value) {
  if (
    typeof value === "object" &&
    Array.isArray(value) === false &&
    value !== null
  )
    return true;
  return false;
}
console.log(isObject({}));
// Bài 106: Bài tập chương 7 số 2
// 2. Viết 1 fn {a: 1, b: 2} -> [["a", 1], ["b": 2]]
// Cách 1:
function objectToArray1(obj) {
  if (isObject(obj) === false) return;
  return Object.entries(obj);
}
console.log(objectToArray1({ a: 1, b: 2 }));
// Cách 2:
function objectToArray2(obj) {
  if (isObject(obj) === false) return;
  const value = Object.keys(obj).map((item) => [item, obj[item]]);
  return value;
}
console.log(objectToArray2({ a: 1, b: 2 }));
// Cách 3:
function objectToArray3(obj) {
  if (isObject(obj) === false) return;
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}
console.log(objectToArray3({ a: 1, b: 2 }));

// Bài 107: Bài tập chương 7 số 3
// 3. Xóa key và value theo key trong object -> ({a: 1, b: 2}, "b") -> {a: 1}
function without(obj, ...key) {
  const newObj = { ...obj };
  key.forEach((item) => delete newObj[item]);
  return newObj;
}
console.log(without({ a: 1, b: 2, c: 3 }, "a", "b"));
// Bài 108: Bài tập chương 7 số 4
/* 
 4. Kiểm tra 2 object truyền vào có bằng nhau hay ko
   {a: 1, b: 2}, {a: 1, b: 2} -> true
   {a: 1, b: 2}, {a: 1, b: 2, c: 3} -> false
*/
function isEqualObject(obj1, obj2) {
  const objKey1 = Object.keys(obj1);
  const objKey2 = Object.keys(obj2);
  // Check keys length of two objects
  if (objKey1.length !== objKey2.length) return false;
  // Check values of two objects
  const result = objKey1.every((item) => obj1[item] === obj2[item]);
  return result;
}
console.log(isEqualObject({ a: 1, b: 2 }, { a: 1, b: "2" }));

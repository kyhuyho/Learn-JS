// Bài 284: Bài tập đệ quy phần 1
// Input: complexArr
// Output: [1,2,3,3,4,5,2,3,2,3,5,1,2]
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
// Cách 1:
// console.log(complexArr.flat(Infinity));
// Cách 2:
function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}
console.log(flatArray(complexArr, Infinity));

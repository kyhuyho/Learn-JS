// Bài 315: Callstack
function add(a, b) {
  return a + b;
}
function average(a, b) {
  return add(a, b) / 2;
}
let result = average(10, 20);
console.log(result);
/*
- add()
- average()
- Global() 
*/
/*
- average()
- Global() 
*/
/*
- Global() 
*/
/*
 */

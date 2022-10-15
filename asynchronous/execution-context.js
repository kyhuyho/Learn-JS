// Bài 313: Global execution context
let x = 10;
function timesTen(a) {
  return a * 10;
}
let y = timesTen(x);
console.log(y); // => 100
// 1. the creation phase
/*
- Global object: window
- this: window
- x: undefined -> được lưu vào execution text
- timesTen: function() -> được lưu vào memory heap
- y: undefined
*/
// 2. the execution phase
/* 
- Global object: window
- this: window
- x: 10
- timesTen: function()
- y: timesTen(x) -> 100
*/

// Bài 314: Function execution context
// 1. the creation phase
/* 
- Global object: arguments
- this: window
- a: undefined
*/
// 2. the execution phase
/*
- Global object: arguments
- this: window
- a: 10  
*/

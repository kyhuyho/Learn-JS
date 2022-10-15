// Bài 316 317: Tìm hiểu event loop phần 1 2
function task(message) {
  let number = 10000000;
  while (number > 0) {
    number--;
  }
  console.log(message);
}
// console.log("Start");
// task("Loading");
// console.log("End");
// Callbacks
console.log("Start");
// Start chạy xong rời khỏi Call Stack
setTimeout(() => {
  task("Loading");
}, 2000);
/* 
Rời khỏi Call Stack và chạy qua web APIs, trong 2s thì nó chuyển xuống Callback queue, 
nó sẽ chạy lên Call Stack khi Call Stack empty, chạy xong thì nó sẽ rời khỏi Call Stack
*/
console.log("End");
// End chạy xong rời khỏi Call Stack

// Bài 326: Async await phần 1
// function wait(timer = 0) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, timer);
//   });
// }
// // function expression
// async function run() {
//   console.log("starting");
//   await wait(2000);
//   console.log("running");
//   await wait(1000);
//   console.log("ending");
// }
// run();
// // arrow function
// const fn = async () => {};
// // object
// const student = {
//   fullName: async function () {},
//   async calcAge() {},
//   yearly: async () => {},
// };

// Bài 327: Async await phần 2
// function makeTimer(timer = 1000, str) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve(str);
//     }, timer);
//   });
// }
// async function allTimer() {
//   const timer1 = makeTimer(1000, "first time");
//   const timer2 = makeTimer(2000, "second time");
//   const timers = await Promise.all([timer1, timer2]);
//   console.log(timers);
//   // console.log(timer1);
//   // console.log(timer2);
// }
// allTimer();

// Bài 328: Async await phần 3
// function isFrontendDev(languages) {
//   return new Promise(function (resolve, reject) {
//     if (!languages.includes("html")) {
//       reject("You are not Frontend developer");
//     }
//     setTimeout(() => {
//       resolve("You are Frontend developer");
//     }, 1000);
//   });
// }

// Cách 1:
// async function go() {
//   try {
//     const dev1 = await isFrontendDev(["css"]);
//     console.log(dev1);
//   } catch (err) {
//     console.log(err);
//   }
// }
// go();

// Cách 2:
// function handleError(err) {
//   console.log(err);
// }
// async function go() {
//   const dev1 = await isFrontendDev(["css"]);
//   console.log(dev1);
//   return dev1;
// }
// // console.log(go());
// go().then().catch(handleError);

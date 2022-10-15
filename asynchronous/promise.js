// Bài 319: Promise phần 1
// let buyIphone = true;
// let willBuyIphone = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (buyIphone) {
//       resolve("Oh yeah I have new Iphone");
//       console.log("OK");
//     } else {
//       reject("Oh no, I don't have new Iphone");
//       console.log("Not OK");
//     }
//   }, 5000);
// });
// console.log(willBuyIphone);

// Bài 320 321: Promise phần 2 3
// let buyIphone = true;
// function makePromise(buyIphone) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (buyIphone) {
//         resolve("Oh yeah I have new Iphone");
//       } else {
//         reject("Oh no, I don't have new Iphone");
//       }
//     }, 5000);
//   });
// }
// let haveIphone = makePromise(false);
// console.log(haveIphone);
// haveIphone
//   .then(
//     (success) => {
//       console.log(success);
//       // console.log("I'm still happy");
//     }
//     // undefined,
//     // (reason) => console.log(reason)
//   )
//   .catch((error) => {
//     console.log(error);
//     // console.log("I'm still happy");
//   })
//   .finally(() => {
//     console.log("I'm still happy");
//   });

// Bài 322: Promise phần 4
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("1. run the first time");
//   }, 3000);
// })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("2. run the second time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("3. run the third time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Bài 323: Promise phần 5
// function makeTimer(timer = 1000, str) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve(str);
//     }, timer);
//   });
// }
// const timer1 = makeTimer(1000, "first time");
// const timer2 = makeTimer(2000, "second time");
// const timer3 = makeTimer(3000, "third time");
// // console.log(timer1, timer2, timer3);
// // Promise.all()
// const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
//   console.log(data);
// });
// // console.log(timerTotal);

// // Promise.race()
// const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) =>
//   console.log(data)
// );

// Bài 324: Promise phần 6
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
// const dev1 = isFrontendDev(["html", "css"]);
// const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => console.log(data));
// const devRace = Promise.race([dev1, dev2]).then((data) => console.log(data));
// const devAllSettled = Promise.allSettled([dev1, dev2]).then((data) =>
//   console.log(data)
// );

// Bài 325: try catch
// function isFrontendDev2(languages) {
//   if (!languages.includes("html")) {
//     throw new Error("You are not Frontend developer");
//   }
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("You are Frontend developer");
//     }, 1000);
//   });
// }
// try {
//   isFrontendDev2(["css"])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// } catch (error) {
//   console.log("Oh no");
// } finally {
//   console.log("demo");
// }

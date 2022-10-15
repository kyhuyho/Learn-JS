// Bài 329: API là gì ?
// Bài 330: Ví dụ đơn giản với API phần 1
// const endpoint = "https://api.github.com/users/evondev";
// const promise = fetch(endpoint);
// console.log(promise);
// promise
//   .then((response) => {
//     // console.log(response);
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.id);
//     console.log(data.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Bài 330: Ví dụ đơn giản với API phần 1
// const userEl = document.querySelector(".username");
// const endpoint = "https://api.github.com/users";
// async function displayUser(username) {
//   userEl.textContent = "Loading...";
//   const promise = await fetch(`${endpoint}/${username}`);
//   const data = await promise.json();
//   userEl.textContent = data.name;
//   // console.log(data);
//   // console.log(promise);
// }
// function handleError() {
//   userEl.textContent = "Not Found";
//   console.log("Not found API");
// }
// displayUser("evondev").catch(handleError);

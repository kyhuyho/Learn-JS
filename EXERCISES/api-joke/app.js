const jokeButton = document.querySelector(".joke-button");
const jokeHeading = document.querySelector(".joke-heading");
const joke = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";
async function getJoke() {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  // console.log(response);
  // console.log(data);
  return data;
}
async function hanldeClick() {
  joke.classList.add("is-loading");
  const data = await getJoke().catch(handleError);
  jokeHeading.textContent = data.joke;
  joke.classList.remove("is-loading");
}
function handleError() {
  jokeHeading.textContent = "Loading...";
  console.log("API NOT FOUND");
}
jokeButton.addEventListener("click", hanldeClick);

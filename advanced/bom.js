// Bài 288: Location trong BOM
// 1. Location
console.log(location);
console.log(window.location);
// setTimeout(() => {
//   location.href = "https://www.youtube.com/";
// }, 1000);
let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
params.set("page", 10);
console.log(params.get("page"));
console.log(params.keys());
for (let i of params.keys()) {
  console.log(i);
}
for (let i of params.values()) {
  console.log(i);
}
params.delete("page");

// Bài 290: History trong BOM
console.log(window.history);

// Bài 291: Navigator trong BOM
console.log(window.navigator.userAgent);
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

// Bài 50: Giải bài tập chương 5 - Bài 1
// Viết chương trinh nhập vào năm sinh và in ra số tuổi
// function getAge(yaer = 2000) {
//   if (typeof yaer !== "number") return 0;
//   const now = new Date();
//   const currentYear = now.getFullYear();
//   return currentYear - yaer;
// }
// const yourAge = getAge("abc");
// console.log(`Năm nay bạn ${yourAge} tuổi`);

// Bài 51: Giải bài tập chương 5 - Bài 2
/* 
 Viết chương trình đếm ngược thời gian theo từng giây dựa vào thời gian ban đầu. Ví dụ thời gian làm bài là 1 phút
 nếu chạy về 0 thì thông báo hết thời gian
 */
// function coutdown(minutes = 1) {
//   let seconds = minutes * 60; // 60(s)
//   let counter = 0;
//   const timer = setInterval(function () {
//     counter = counter + 1;
//     console.log(counter);
//     if (counter === seconds) {
//       clearInterval(timer);
//       console.log("Your time is end!!!");
//     }
//   }, 1000);
// }
// coutdown();

// Bài 52: Giải bài tập chương 5 - Bài 3
/* 
 Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại.
 Ví dụ: Bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiện thị bạn A vừa online `3 phút trước`.
 `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`
*/
function timeSince(date) {
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); // in ra giây
  if (seconds < 0) {
    alert("Your time is invalid");
    return;
  }
  let timer = seconds / 31536000;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} năm trước`);
    return;
  }
  timer = seconds / 2678400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tháng trước`);
    return;
  }
  timer = seconds / 604800;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tuần trước`);
    return;
  }
  timer = seconds / 86400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} ngày trước`);
    return;
  }
  timer = seconds / 3600;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giờ trước`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} phút trước`);
    return;
  }
  timer = seconds;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giây trước`);
  }
  return;
}
// 1 năm = 365 * 24 * 60 * 60 = 31536000 (s)
// 1 tháng = 31 * 24 * 60 * 60 = 2678400 (s)
// 1 tuần = 7 * 24 * 60 * 60 = 604800 (s)
// 1 ngày = 1 * 24 * 60 * 60 = 86400 (s)
// 1 giờ = 60 * 60 = 3600 (s)
// 1 phút = 60 (s)
timeSince("Sat Jul 09 2022 10:50:08 GMT+0700 (Indochina Time)");

// Bài 40: Tìm hiểu về date phần 1
// const now = new Date();
// console.log(now); // Wed Jul 06 2022 09:15:03 GMT+0700 (Indochina Time)
// Timezone: GMT+0700 (Indochina Time)
// Second: 03
// Minute: 15
// Hour: 09
// Year: 2022
// Month: Jul
// Day: 06
// Day of the week: Wed

// Bài 41: Timestamp & Epoch time
// const now = new Date();
// console.log(now.getTime()); // print timestamp
// console.log(new Date(0));

// Bài 42: 4 cách khởi tạo date cơ bản
// const now = new Date();
// Cách 1:
// console.log(now);
// Cách 2:
// console.log(now.getTime());
// console.log(new Date(1657078054841));
// Cách 3:
// console.log(new Date("Wed Jul 06 2022 10:24:07 GMT+0700 (Indochina Time)"));
// Cách 4:
// console.log(new Date(2022, 6, 7, 23, 23, 23, 23));

// Bài 43: Các hàm get trong Date
// const birthday = new Date(2022, 6, 13, 23, 25, 23, 20);
// In ra năm
// console.log(birthday.getFullYear()); // => 2022
// In ra tháng
// console.log(birthday.getMonth()); // => 6
// In ra ngày của tháng
// console.log(birthday.getDate()); // => 13
// In ra thứ của tuần
// console.log(birthday.getDay()); // => 3(thứ 4)
// In ra giờ
// console.log(birthday.getHours()); // => 23
// In ra phút
// console.log(birthday.getMinutes()); // => 25
// In ra giây
// console.log(birthday.getSeconds()); // => 23(s)
// In ra milli giây
// console.log(birthday.getMilliseconds()); // => 20(ms)
// In ra timestamp
// console.log(birthday.getTime()); // => 1657729523020

// Bài 44: Các hàm set trong Date
// const birthday = new Date(2022, 6, 13, 23, 25, 23, 20);
// console.log(`My birthday: ${birthday}`); // => My birthday: Wed Jul 13 2022 23:25:23 GMT+0700 (Indochina Time)
// set năm
// birthday.setFullYear(2021);
// set tháng
// birthday.setMonth(7);
// set ngày của tháng
// birthday.setDate(30);
// set giờ
// birthday.setHours(20);
// set phút
// birthday.setMinutes(20);
// set giây
// birthday.setSeconds(20);
// console.log(`My birthday after update: ${birthday}`);

// Bài 45: Tìm hiểu utc trong Date
// const birthday = new Date(2022, 6, 13);
// In ra năm
// console.log(birthday.getUTCFullYear()); // => 2022
// In ra tháng
// console.log(birthday.getUTCMonth()); // => 6
// In ra ngày của tháng
// console.log(birthday.getUTCDate()); // => 12
// In ra thứ của tuần
// console.log(birthday.getUTCDay()); // => 2(thứ 3)
// In ra giờ
// console.log(birthday.getUTCHours()); // => 17
// In ra phút
// console.log(birthday.getUTCMinutes()); // => 0
// In ra giây
// console.log(birthday.getUTCSeconds()); // => 0
// In ra milli giây
// console.log(birthday.getUTCMilliseconds()); // => 0

// Bài 46: Tìm hiểu các hàm khác
// const now = new Date();
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleDateString("vi-VI"));
// console.log(now.toISOString());

// Bài 47: Bài tập đơn giản về Date
// Input: Thu Jul 22 2022 19:03:26 GMT+0700 (Indochina Time)
// Output: 27/07/2022
// const myTime = new Date("Thu Jul 27 2022 19:03:26 GMT+0700 (Indochina Time)");
// const myYear = myTime.getFullYear(); // => 2022
// const myMonth = myTime.getMonth() + 1; // => 7
// const myDate = myTime.getDate(); // => 22
// const prefixMoth = myMonth < 10 ? "0" : "";
// console.log(`${myDate}/${prefixMoth}${myMonth}/${myYear}`); // => "27/07/2022"

// Bài 48: setimeout và setInterval
// setTimeout
// const timer1 = setTimeout(function () {
//   alert("Call me after 3 seconds");
// }, 3000);
// clearTimeout(timer1);
// setInterval
// const timer = setInterval(function () {
//   console.log("Call me");
// }, 1000);
// clearInterval(timer);

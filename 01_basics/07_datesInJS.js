// Date 

let date = new Date();
// console.log(date);   // 2026-05-31T03:45:48.142Z
// console.log(date.toString()); // Sun May 31 2026 09:15:48 GMT+0530 (India Standard Time)
// console.log(date.toDateString()); // Sun May 31 2026
// console.log(date.toTimeString()); // 09:15:48 GMT+0530 (India Standard Time)
// console.log(date.toLocaleDateString()); // 31/05/2026
// console.log(date.toLocaleTimeString()); // 9:15:48 AM
// console.log(date.toLocaleString()); // 31/05/2026, 9:15:48 AM       // best for date and time both

// console.log(date.getFullYear());
// console.log(date.getMonth()); // month start from 0 to 11


// let myBirthDate = new Date(2005,7,18);// month start from 0 to 11 
// console.log(myBirthDate);
// console.log(myBirthDate.toLocaleString());
// console.log(myBirthDate.toDateString());


// let myBirthDate2 = new Date("2005-08-18") // this is the best way to create date because it is not depend on month start from 0 to 11;
// console.log(myBirthDate2);
// console.log(myBirthDate2.toLocaleString());


//+++++++++++++++++++++++ TIMESTAMPS +++++++++++++++++++++++
// mainly the uses of timestamps in to get exact time in milliseconds and to compare two dates and use in to creat a quizes for exact timing without any delay

// let currentTime = Date.now();
// console.log(currentTime.toString());

// console.log(Math.floor(Date.now()/1000)); // to get time in seconds

let newDate = new Date();
console.log(newDate.toLocaleDateString('default', {
    weekday: 'long',
    timezone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',

}));




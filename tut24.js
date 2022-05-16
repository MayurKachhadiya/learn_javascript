console.log("we can see Date & Time");

let today = new Date();
let a;
a = today.getDate();
a = today.getMonth();
a = today.getFullYear();
a = today.getMinutes();
a = today.getSeconds();
a = today.getMilliseconds();
// console.log(today);
console.log(a);
today.setHours(12);
today.setSeconds(10);
today.setMinutes(10);
today.setFullYear(2001);
today.setDate(09);

console.log(today);
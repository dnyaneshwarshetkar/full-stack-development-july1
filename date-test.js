let d1 = new Date();

console.log(d1.getDate());

console.log(d1.getDay())

console.log(d1.getFullYear());

console.log(d1.getSeconds())

let dt = "2024-01-01";

let newDate = new Date(dt);
newDate.setDate(2);
console.log(newDate);
newDate.setMonth(11)

console.log(newDate);

console.log(newDate.toDateString());
console.log(newDate.toISOString());

let currentDate = new Date();

console.log(currentDate);

console.log(currentDate.toISOString());
let m1 = new Map();

m1.set("name", "John Doe");

m1.set("gender", "Male");

m1.set("dob", new Date("01-01-1981"));
console.log(m1);

console.log(m1.get("dob"));

m1.clear();

console.log(m1);
let inputArr = [3,1,7,8,12,12,7,8,3];

let s1 = new Set(inputArr);

s1.add(12);

//s1.delete(12);

console.log(s1);

console.log(s1.has(12));
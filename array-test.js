let hobby1 = "Reading";
let hobby2 = "Playing Cricket";
let hobby3 = "Riding";
let hobby4 = "Swimming";

let hobbies = ["Playing Cricket","Reading", "Riding", "Swimming", "Dance", "Story"];

let hobbies1 = ["Writing", "Walking", "Treking", "Painting"];

let newHobbies = hobbies.concat(hobbies1);

let numberArray = [0,2,4,6,8,10,13];
console.log(newHobbies);

/*let everyResult = numberArray.every((item,index)=>{
    let result = item / 2;
    result = result.toString();
    if(result.includes(".5")){
        return false;
    } else {
        return true;
    }
});*/

let everyResult = numberArray.some((item,index)=>!(item%2));

console.log("Every Item is Even",everyResult);

let findResult = hobbies.find((item,index)=>{
    return item.includes("ing");
});

console.log("Find Result", findResult);


let filterResult = hobbies.filter((item,index)=>{
    return item.includes("ing");
});

console.log("Filter Result", filterResult);


hobbies.forEach((item, index)=>{
    console.log(item,index);
})

for(let i=0;i<hobbies.length;i++){
    console.log(i, hobbies[i]);
}

console.log(hobbies.includes("Singing"));

console.log(hobbies.join(""));

let hobbiesUpperCase = hobbies.map((item, index)=>{
    return item.toUpperCase();
});

console.log(hobbiesUpperCase);


// Stack

hobbies.push("Gaming");

console.log(hobbies);

hobbies.pop();
console.log(hobbies);

// Queue

hobbies.shift();

console.log(hobbies);

hobbies.unshift("Song Writing");

console.log(hobbies);





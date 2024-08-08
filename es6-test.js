// Arrow Function
//var add = (a=10,b=30)=>a+b;
//console.log(add(20,50));
// 1,2,3,4,5
function add(num1,num2, ...arguments){
    console.log(arguments);
    return num1 + num2 + arguments.reduce((previousValue, currentValue)=>{
        return previousValue + currentValue;
    },0);
}

// ...spread operator

let arr1 = [20,30,40,60];

let arr2 = [50,60,90,20];

let arr3 = [...arr1,...arr2];

console.log(arr3);

console.log(add(...arr3));

let {username, email} = { username:"John Doe", email: "john@gmail.com", mobile: "+918912348912" };

console.log(username);
console.log(email);

let u2 = { username: "mahesh", email: "mahesh@gmail.com", mobile: "+918923891289" };

let u3 = {salary: 3000,...u2};

let division = (a,b)=>{
    let p1 = new Promise((resolve,reject)=>{
        let result = a/b;
        if(result !== Infinity){
            resolve(result);
        } else {
            reject("The number is greater than 50");
            }
    });
    return p1;
}




division(20,10).then(success=>{
    console.log("Success",success);
}).catch(error=>{
    console.log("Error", error);
})

fetch("http://localhost:5500/data.json",{
    "Content-Type": "application/json"
}).then(data=>{
    console.log(data.body)
}).catch(error=>{
    console.log("Error", error);
});


// Symbol


// let s1 = new Symbol("name");

const nameConst = "name";

let u5 = { [nameConst]: "John Doe" };

console.log(u5);

let u6 = { [nameConst]: "Mahesh Jadhav" }









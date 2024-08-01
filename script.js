/*function globalFunc(){
x = 10;
console.log("Hello World");

    {
        a = 20;
        b = 30;
        c = a + b;
    }
}
globalFunc();

console.log(c);


console.log(d);

var d = 20;
console.log(typeof d);
d = true;
console.log(typeof d);
d  = "Hello World";
console.log(typeof d);

var r;
r = 20;
r = null;

console.log(typeof r);

let f1 =  {
    color: "blue",
    manufatureDate: "12-12-2024",
    cost: 3000,
    company: "Bajaj",
    on: function(){

    },
    off: function() {

    }
} 

console.log(f1.cost);*/

let f2 = new Object();
f2.color = "pink";
f2.cost = 4000;
f2.company = "Usha";

/*if(f2.color == "blue"){
    console.log("If Block");
}else {
    console.log("Else Block");
}



if(f2.color == "pink"){
    console.log("Pink Block")
}
else if(f2.color == "yellow"){
    console.log("Yellow Block")
}
else if(f2.color =="black"){
    console.log("Black Block")
}
else {
    console.log("Green block");
}*/
switch(f2.color){
    case "pink":
        console.log("pink");
    case "yellow":
    console.log("yellow");
    case "black":
        console.log("black");
    default:
        console.log("Other color");
}


function add(num1,num2){
    return num1 + num2;
}

var sum = add(45,20);
console.log(sum);

var mul = function(num1,num2){
    return num1 * num2;
}

mul(2,12);

var div = (num1,num2)=> {
    
    return num1/num2
};

console.log(typeof div);

console.log(div(4,2));

function forLoop(){
    for(var num3=10;num3<10;num3 = num3 + 1){
        console.log(num3);
    }
}

forLoop();

//console.log(num3);

/*const PI = 3.14;

PI = 3.56;*/

num4 = 10;
while(num4<10){
    console.log(num4);
    num4 = num4 + 1;
}

console.log(num4);
var num5 = 0;
do{
    console.log(num5);
    num5 = num5 + 1;
}while(num5<=10);

console.log(num5);











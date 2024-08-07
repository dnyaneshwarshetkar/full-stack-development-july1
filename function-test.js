a = 10;
b = 20;
c = (function addition(){
    var a = "ABC";
    var b = 80;
    return a + b;
})();

console.log(c);

function outer(){
    var a =  30;
    var b = 40;
    return function inner(){
        return a + b;
    }
}


let innerFunction = outer();

console.log(innerFunction());


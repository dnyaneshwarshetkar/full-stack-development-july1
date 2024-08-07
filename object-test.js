let u1 = {
    mobile: "+91892345678"
};

u1.name = "John Doe";

u1.gender = "Male";

u1.dob = new Date("01-01-2025");

console.log(u1.gender);


var u2 = new Object();


u2.name = "Maria Doe";

u2.gender = "Female"

u2.dob = new Date("01-01-2029");


console.log(u2.dob);
// Contructor
function User(name, gender,dob, mobile,email){

    console.log(this);
    this.innerName = name;
    console.log(this);
    this.innerGender = gender;
    console.log(this.iDob);
    this.iDob = dob;
    
    this.iMobile = mobile;

    this.iEmail = email;

    console.log(this);
}

let u3 = new User("Mantissa", "Female", "01-01-1996", "+91976787123", "mantissa@gmail.com"); 

console.log(u3.mobile);
let fobj = {
    name: "John DOe"
}

let sObj = {
    email: "john@gmail.com"
} 


Object.assign(fobj, sObj);

console.log(fobj);

let p1 = {
    firstName: "Sonali",
    lastName: "Bedre",
    fullName: function(jOp){
        return this.firstName + jOp +this.lastName;
    }
}

console.log(p1.fullName(","));

let p2 = {
    firstName: "Manisha",
    lastName: "Koyirala"
}

fn = p1.fullName.bind(p2);
console.log(fn("$"));


console.log(p1.fullName.call(p2, "^"));

console.log(p1.fullName.apply(p2, ["/"]));

console.log(Object.entries(p1));

console.log(Object.values((p1)));
console.log(Object.keys(p1));

console.log(Object.freeze(p1));

p1.email = "abcd@gmail.com";

console.log(p1);

console.log(Object.isFrozen(p1));

Object.preventExtensions()



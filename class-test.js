class User {
    #firstName;
    #lastName;
    constructor(f,l){
        this.#firstName = f;
        this.#lastName = l;
    }

    fullName(){
        return this.#firstName + " " + this.#lastName;
    }

    get firstName(){
        return this.#firstName.toUpperCase();
    }
    get lastName(){
        return this.#lastName;
    }

    set firstName(f){
        this.#firstName = f;
    }

    set lastName(l){
        this.#lastName = l;
    }
}



let u1 = new User("John", "Doe");

u1.firstName = "Madhuri";


//console.log(u1.firstName);

console.log(u1.firstName);

class Employee extends User {
    #salary;

    constructor(f,l,s){
        super(f,l);
        this.#salary = s;
    }

    get salary(){
        return this.#salary;
    }

    set salary(num){
        this.#salary = num;
    }
}

let e1 = new Employee("Mahesh", "Jadhav", 20000);

console.log(e1.firstName, e1.lastName, e1.salary);

console.log(e1.fullName());


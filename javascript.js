//pass this pseudocode to index.html file to see desired results in console

//let const
//String, Numbers, boolean, null, undefined

const s = "Hello world";

console.log(s.length);
console.log(s.split('; '));

//condition 
const x= 10;

const color = x > 10 ? 'red' :  'blue';
console.log(color);

//functions 
const addnums = (num1 = 1, num2 = 2) => {
    console.log(num1 + num2);
}

addnums(5,5);

//construtor function
function Person(firstName, lastName,dob)
{
    this.firstName=firstName;//setting to the properties of the object
    this.lastName=lastName;
    this.dob=new Date(dob); //I converted it to be date and time and not string anymore
    this.getFullYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//class
class Person{
    constructor(firstName, lastName,dob)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getFullYear(){
        return this.dob.getFullYear();
    }
}

//Instantiate Object
const person1 = new Person('John' , 'Kennedy' , '04-02-1996');//here as you can see we just put date as string
console.log(person1.dob.getFullYear());
console.log(person1.dob.getFullName());
/*Oops completed*/


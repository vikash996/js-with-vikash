// # Primitive
// 7 types : 
// String , Number , Boolean, null , undefined,Symbol,BigInt

const score = 100;
const scoreVal = 100.4;

const isLoggedIn = true;
const outsideTemp = null;
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const BigNumber = 863686826367798n


// NON PRIMITIVE
// Array , Obejects , Functions

const heros = ["shaktiman", "naagraj","doga"]


let myObj = {
    name: "vikash",
    age: 21,
}

const myFunction = function(){
    console.log("hello vikash");
    
}

console.log(typeof myFunction);

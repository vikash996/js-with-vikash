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


//++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)  ,  Heap (Non- Primitive)
  
// stack basically cophy deta hai na ki original refrence

let myYoutubename = "vikashPandaydotcom"

let anothername = myYoutubename
anothername = "pandayJivlogs"

console.log(myYoutubename);
console.log(anothername);

// heap me referece ka oroginal address 
// hota hai jo ki ek bar banaya jata hai 
// jab hum object create karte hai , aur 
// jab hum usko dusre variable me assign
//  karte hai to wo usi address ko point 
// karta hai , isliye jab hum usme change
//  karte hai to dono me change dikhai deta
//  hai kyuki dono same address ko point kar 
// rahe hote hai
let userOne = {
    name:"vikash",
    email:"vikashPanday@gmail.com"
}

let userTwo = userOne
userTwo.email = "panday9005@gmail.com"

console.log(userOne);
console.log(userTwo);





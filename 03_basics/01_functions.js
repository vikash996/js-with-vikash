// console.log("v");
// console.log("i");
// console.log("k");
// console.log("a");
// console.log("s");
// console.log("h");
//  function printMyName(){
//     console.log("vikash panday");
//  }
//  printMyName();



// function SumofTwoNum(num1, num2){
//     return num1+num2;
// }
// sum = SumofTwoNum(2, 3);
// console.log(sum);


// function isLoggedIn(name= "pandey"){ // if i will not pass any argument to the function, then it will take the default value of the parameter, which is "pandey" in this case. if i will pass an argument
//     if(!name){
//         console.log("please enter the name");
//         return;
//     }
//     return `${name} is logged in`;
// }
// // console.log(isLoggedIn("vikash"));
// console.log(isLoggedIn());


// function CalculateCartPrice(...num1){   // ... dot ka simple mtlnb ye hai ki agar merko pata nhi hai ki kitni values pass karni hai, to me ... dot ka use kr skta hu. isse me jitni values pass krna chahata hu, utni values pass kr skta hu. ye ek array ke form me values ko store krta hai. isse me array ke methods ka use kr skta hu. isse me array ke properties ka use kr skta hu. isse me array ke length property ka use kr skta hu. isse me array ke push method ka use kr skta hu. isse me array ke pop method ka use kr skta hu. isse me array ke shift method ka use kr skta hu. isse me array ke unshift method ka use kr skta hu. isse me array ke slice method ka use kr skta hu. isse me array ke splice method ka use kr skta hu. isse me array ke indexOf method ka use kr skta hu. isse me array ke lastIndexOf method ka use kr skta hu. isse me array ke includes method ka use kr skta hu. isse me array ke find method ka use kr skta hu. isse me array ke findIndex method ka use kr skta hu. isse me array ke forEach method ka use kr skta hu. isse me array ke map method ka use kr skta hu. isse me array ke filter method ka use kr skta hu. isse me array ke reduce method ka use kr skta hu. isse me array ke reduceRight method ka use kr skta hu. isse me array ke every method ka use kr skta hu. isse me array ke some method ka use kr skta hu.
//     return num1;
// }
// console.log(CalculateCartPrice(100, 200, 300));


// const user = {
//     name: "vikash",
//     age: 24,   
// }
// function aboutuser(anyObject){
//     console.log(`name is ${anyObject.name} and age is ${anyObject.age}`);
// }

// aboutuser({
//     name: "vikash panday",
//     age: 24,
// }
// );


// array of objects
const array = [200, 300, 400];
function returnSecondElement(anyArray){
    return anyArray[1];
}
console.log(returnSecondElement(array));

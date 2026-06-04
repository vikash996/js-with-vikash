// const user = {
//     name: "vikash",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.name} welcome to vikash.com`);  // vikash welcome to vikash.com
//         console.log(this);  // {name: 'vikash', price: 999, welcomeMessage: ƒ}
//     }
    
// }
// user.welcomeMessage();
// user.name = "sam";
// user.welcomeMessage();  // sam welcome to vikash.com
// console.log(this); // window object




// const chai = function(){
//     let username = "vikash";
//     console.log(this.username);  // window object
// }
// chai();


const chai = () => {
    let username = "vikash";
    console.log(this.username);  // undefined
}
chai();



const user = (num1 , num2) => {
    return num1 + num2;
}                              // both are same 
console.log(user(5,10));

const user1 = (num1, num2) => num1 + num2;
console.log(user1(5,10));
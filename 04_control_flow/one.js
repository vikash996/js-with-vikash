// const isLoggedIn = true;
// const temprature = 30;
// if(temprature >= 25){
//     console.log("It's a hot day");
// }else{
//     console.log("It's a nice day");
// }



// const score = 200;

// if(score >= 90){
//     const power = "fly";
//     console.log(`You are a superhero and your power is: ${power}`);
// }


// console.log(`You are a superhero and your power is ${power}`);

// const balance = 1000;
// if (balance < 500){
//     console.log("less than 500");
// } else if(balance <750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("more than 900");
// }


const userLoggedIn = true;
const debitCard = true;
 if ( userLoggedIn && debitCard){
    console.log("you can buy our product");
 }else if (userLoggedIn){
    console.log("please add your debit card");
 }else if (debitcard){
    console.log("please login to your account");
 }else{
    console.log("please login and add your debit card");
 }
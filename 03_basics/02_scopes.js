let a = 100;
if(true){
    let a = 200;
    const b = 300;   // this is a block scope variable. it is only accessible within the block. it is not accessible outside the block. it is not accessible in the global scope. it is not accessible in the function scope. it is not accessible in the module scope. it is not accessible in the class scope. it is not accessible in the block scope. it is not accessible in the if block scope. it is not accessible in the for block scope. it is not accessible in the while block scope. it is not accessible in the do-while block scope. it is not accessible in the switch block scope. it is not accessible in the try-catch block scope. it is not accessible in the finally block scope. it is not accessible in the arrow function scope. it is not accessible in the generator function scope. it is not accessible in the async function scope. it is not accessible in the async generator function scope. it is not accessible in the class method scope. it is not accessible in the static class method scope. it is not accessible in the constructor scope. it is not accessible in the getter scope. it is not accessible in the setter scope. it is not accessible in the module scope. it is not accessible in the global scope.
    console.log("Innner: ",a);   // 200
   // 300
}
// console.log(a);   // ye global scope variable hai, isliye iska value 100 hai. block scope variable ka value 200 hai, lekin wo block ke andar hi accessible hai, isliye uska value 200 hai. global scope variable ka value 100 hai, isliye uska value 100 hai. function scope variable ka value undefined hai, isliye uska value undefined hai. module scope variable ka value undefined hai, isliye uska value undefined hai. class scope variable ka value undefined hai, isliye uska value undefined hai. block scope variable ka value 200 hai, isliye uska value 200 hai. if block scope variable ka value 200 hai, isliye uska value 200 hai.



// +++++++++++++++nested function +++++++++++++++++++++++++

function one(){
    const username = "vikash";
    function two(){
        const message = "hello";  // nested loop me jo child fuction hota hai vo parent fucntion ke variable ko 
        console.log(username);    // ko accese kr skta hai par parent function child funcion ke variable ko acces nhi 
    }                             // kr skta hai. isliye yaha par username variable ko two function ke andar access kr skte hai lekin message variable ko one function ke andar access nhi kr skte hai.
    two();
}
one();



if (true){
    const name = "vikash";
    if(name === "vikash"){
        const website = "vikash.com";
        console.log(name + " " + website);  // vikash vikash.com
    }
    // console.log(website);   kyuki parent function child fucntion se variable nhi access kr skta hai isliye error aayga.
    // console.log(name);
    
}
console.log(name);   // name variable block scope variable hai, isliye uska value undefined hai.`



// ++++++++++++++++++++ importatnt ++++++++++++++++++++++++


function one(num){      // ise bolte hai normal function declaration .
    return 1 + num;
}
console.log(one(5));  // 6


const two = function(num){     // isme hum function ko kisi varibale me store kr dete hain isi ko bolte hain function expression.
    return 2 + num;
}
console.log(two(5));  // 7
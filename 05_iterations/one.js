// // for loops 
// for(let i=0; i<10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("element 5 is my luky no.");
//     }
//     console.log(element);
// }

// for(let i=1; i<=10; i++){
//     console.log(`Table of: ${i}`);
//     for(let j = 1; j<=10; j++){
//         console.log(i+" * " + j + " = " + i*j);
//     }
// }

// let myArry = ["vikash", "subhash", "ram", "shyam"];
// for(let i=0; i<myArry.length; i++){
//     const name = myArry[i];
//     console.log(name);
// }


for(let i=0; i<=10; i++){
    if(i==5){
        console.log("detected 5");
        break;

    }
    console.log(i);
}
for(let i=0; i<=10; i++){
    if(i==5){
        console.log("detected 5");
        continue

    }
    console.log(i);
}
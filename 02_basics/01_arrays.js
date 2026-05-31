// Arrays 

// const arr = [1, 2, 3, 4, 5];

// console.log(arr[0]);
// console.log(arr[4]);

// arr[2] = 100;
// console.log(arr);

// const fruits = ["apple", "banana", "grapes", "mango"];

// console.log(fruits[1]);

// const array = [1,2,3,4];
// // array.push(5); // add element at the end of the array
// // console.log(array);
// // array.unshift(9); // add element at the start of the array
// // console.log(array);
// // array.shift(); // remove element from the start of the array
// // console.log(array);
// // array.pop(); // remove element from the end of the array
// // console.log(array);

// console.log(array.includes(3)); // to check if element is present in the array or not
// console.log(array.indexOf(3)); // to get the index of the element in the array

// const array = [1,2,3,4,5];
// const newArray = array.join();
// console.log(newArray);
// console.log(array);

const myArray = [1,2,3,4,5];

// console.log(myn1);
console.log("A",myArray);
const myn1 = myArray.slice(1,3); // original array se element ko remove nahi karta hai aur usko return karta hai
console.log(myn1);
console.log("B",myArray);
const myn2 = myArray.splice(1,3);// original array se element ko remove karta hai aur usko return karta hai
console.log(myn2);


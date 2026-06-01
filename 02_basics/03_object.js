// singleton object
// object.create() method is used to create a new object, using an existing object as the prototype of the newly created object.


// obejct literal
const mysym1 = Symbol("key1");
const aboutMe = {
    name: "vikash",
    "full name": "vikash Panday",
    [mysym1]: "my value",
    age: 21,
    hobbies: ["coding", "gaming", "travelling"],
    isStudent: true,
    isMarried: false,
}
// console.log(aboutMe.age); 
// console.log(aboutMe["name"]);
// console.log(aboutMe["age"]); 
// console.log(aboutMe["full name"]);// thats why we are using this property because if you have another like full name so dot can not access it but with the help of bracket notation we can access it.
// console.log(aboutMe[mysym1]);// this is how we can access the symbol property of an object. we can not access it with the help of dot notation because it is a symbol and it is not a string. so we have to use bracket notation to access it. and we have to pass the symbol as a key to access its value.


// aboutMe.age = 22; // we can change the value of the property of an object.
// console.log(aboutMe.age);
// Object.freeze(aboutMe); // this method is used to freeze an object. it prevents the modification of the object. it does not allow to change the value of the property of an object.
// aboutMe.age = 23; // this will not change the value of the property of an object because the object is frozen.
// console.log(aboutMe.age); 


aboutMe.greetings = function() {
    console.log("hello");
}
aboutMe.greetingsTwo = function() {
    console.log(`hii ${this.name}`); // this keyword is used to access the properties of an object. it refers to the current object. in this case, it refers to the aboutMe object. so it will print hii vikash.
}
console.log(aboutMe.greetings());
console.log(aboutMe.greetingsTwo());
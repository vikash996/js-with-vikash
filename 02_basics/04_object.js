// const tinderUser = new Object();        // singleton object

const tinderUser = {};                    // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "vikash";
tinderUser.isLoggedIn = false;

// console.log(Object.keys(tinderUser));      // it will return an array of keys of the object.
// console.log(Object.values(tinderUser));    // it will return an array of values of the object.
// console.log(Object.entries(tinderUser));   // it will return an array of entries (key-value pairs) of the object.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // it will return true if the object has the property, otherwise it will return false.

// console.log(tinderUser);

const regularUser = {
    email: "vikash@gmail.com",
    fullName :{
        Username:{                 // that means hum object ke under object bana skte hain or dot notation ke help se uske properties ko access kr skte hain.
            firstName: "vikash",
            lastName: "Panday",
        }
    }
}
// console.log(regularUser.fullName.Username.lastName);


const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"c", 4: "d"};

// const obj3 = {...obj1, ...obj2}; // spread operator is used 90 % cases to merge two objects. it creates a new object by copying the properties of the existing objects. it does not modify the existing objects. it is a shallow copy, which means that if the property value is an object, then it will copy the reference of the object, not the actual object. so if we change the value of the property of the object, then it will change the value of the property of the original object as well. but if we use Object.assign() method, then it will create a new object and copy the properties of the existing objects to the new object. it does not modify the existing objects. it is a shallow copy as well.
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({},obj1, obj2);       // meth

// console.log(obj3);

const usermail = [];
if (usermail) {
  console.log("Email is present");
} else {
  console.log("Email is not present");
}

// falsy values: false, 0, "", null, undefined, NaN, bigint(0n), symbol, 
//truthy vaues: 'false', '0', ' ', [], {}, function(){}, new Date(), Infinity, -Infinity, bigint(1n), symbol('symbol')

// if (usermail.length === 0){
//     console.log("Array is empty");
// }

const emptyobject = {};
if(Object.keys(emptyobject).length === 0){
    console.log("Object is empty");
}
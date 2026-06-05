// immediate invoked function expression


(function one(){
    // named function expression
    console.log("one");
})();


((name) => {
    console.log(`Hello, ${name}`);
})("vikash");
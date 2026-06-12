// const myNums = [1,3,2];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc+currval
// },3)

// const mytotal = myNums.reduce( (acc, currval) => acc+currval , 3)
// console.log(mytotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 9991
    },
    {
        itemName: "js course",
        price: 2999
    },
]
const pricetoPay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetoPay)
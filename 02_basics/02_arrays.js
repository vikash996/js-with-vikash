const heros = ["james", "henry", "john"];
const villains = ["thanos", "loki", "ultron"];

// heros.push(villains);
// console.log(heros);

// const newone = heros.concat(villains);
// console.log(newone);

// const newone = [...heros, ...villains];
// console.log(newone);

// const another_array = [1,2,3,[4,5,6],7,[4,9,[10,11,12]],8,9];
// const real_another_array = another_array.flat(Infinity);
// // console.log(real_another_array);

// console.log(Array.isArray("hello"));
// console.log(Array.from("hello"));


const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));
console.log(Array.of(score1, score2, score3).length);
console.log(Array.from([score1, score2, score3]).length);
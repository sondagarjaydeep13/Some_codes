// const array = [1, 2, 310, 4, 56, 1, 78, 96, 12];
// const result = array.filter((i) => {
//   return i >= 10;
// });
// console.log(result);

// const array = ["Kamal", "Rajesh", "Mohan", "Aman", "Rohan"];
// const number = [1, 2, 3, 45, 6, 78, 9];
// // const result = array.indexOf("Aman");

// // const result = array.slice(5);
// // const result2 = array.slice(2);
// // console.log(result2);
// // // console.log(result);

// // const result = array.splice(2, 2);
// const result = array.shift();
// console.log(result);
// console.log(array);

// ---------Primitive data type-------------
// let a = 10;
// a = 20;
// console.log(a);

//.................reference data type...........

const data = {
  name: "Kamal",
  age: 20,
};
const person = data;
person.name = "Mohan";
console.log(data);

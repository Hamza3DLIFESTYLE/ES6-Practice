// let x = 2000;
// let y = 3000;
// let arr = [x, y];
// //console.log(arr);
// // ...= rest
// const rest = (...prams) => {
//   let sum = 1;
//   //console.log(prams);
//   arr = [2, 4, 6, 9];
//   for (let x of prams) {
//     x === 8 ? console.log(`${8} found in array`) : "";
//     console.log(x);
//     sum *= x;
//   }

//   //   for (let i = 0; i < prams.length; i++) {
//   //     console.log(prams[i]);
//   // prams[0]= 2
//   //   }

//   return sum;
// };
// // for, foreach, for in, for of, map (with arrays)

// // let sum = rest(1, 2, 3, 4, 5);
// //rest(4, 8, 12, 16);
// //let sum2 = rest(1, 2, 3);
// //console.log("sum ", sum, "sum1 ", sum1, "sum2 ", sum2);

// // ----- foreach ------//
// // JSON javascript object notation
// const numbers = [1, 2, 3, 4, 5];
// const persons = [
//   { nammz: "abcd", age: 20, DOB: "01-07-2002" },
//   { nammz: "abcdefg", age: 22, DOB: "01-07-2000" },
//   { nammz: "ijkl", age: 21, DOB: "01-07-2001" },
// ];

// // numbers.forEach(function (n) {
// //   let x = 1;
// //   x *= n;
// //   console.log(x);
// // });
// // console.log(numbers);
// // persons.forEach((person) => {
// //   console.log(
// //     `name: ${person.nammz} \n age: ${person.age} \n DOB: ${person.DOB}`
// //   );
// // });
// // for in
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   test: "test",
// };

// for (let key in person) {
//   console.log(key);
//   //console.log(`${key}: ${person[key]}`);
// }

// arr = [2, 4, 6, 9];
// for (let x of arr) {
//   //  console.log(x);
// }

// //foreach/ Map, for of



// const rest = (...hamza) => {
//     let sum = 0;
//     for (let x of hamza) {
//         sum += x;
//     }
//     return sum;

// };
// let sum = rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(sum);

const rest = (...subtr) => {
    let sum = 0;
    for (let i = 0; i <= 2; i++) {
        sum += i;
        // console.log(subtr[i]);
    }
    return sum;
};
let sum = rest(1, 2, 3, 4, 5);
console.log(sum);
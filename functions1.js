// const simple_function = () => {
//   console.log("welcome message!");
// };

// simple_function();

// take 2 numbers greater than 5 from user and return him double of the sum of those 2 numbers
//let sum =  * 2;
// const return_function = (a, b) => {
//   if (a > 5 && b > 5) return a + b;
//   else return 0;
// };

// let sum = return_function(5, 5) * 2;

// let a
//let b
//let sum;
// if (a > 5 && b > 5) sum = (a + b) * 2;
// else sum = 0;

//console.log("console.log: ", sum);

const age_function = (a) => {
  // ternary operator
  a < 12
    ? console.log("Wlcome Child!")
    : a < 20
    ? console.log("welcome boy!")
    : console.log(" welcome man!");
};
// condition ? {if conditon is true this part will execute} : {else this part execute}
age_function(21);

const a = 6;
const b = 7;
const sum = a > 5 && b > 5 ? (a + b) * 2 : 0;
//console.log(`sum of a and b is ${sum}`);
// 5 x 1 = 5
// 5 x 2 = 10
for (let i = 1; i < 6; i++) {
  console.log(`double of ${i} is ${i * 2}`);
}

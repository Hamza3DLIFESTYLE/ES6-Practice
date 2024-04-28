// // ----- forin loop ------//
let person = {
    name: "hamza",
    Age: 28,
    DOB: "4 - 12 - 1997",
}

for (let x in person) {
    // console.log(x);
    console.log(`${x}:${ person[x]}`);
}
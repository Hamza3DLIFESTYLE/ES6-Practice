const rest = (...prams) => {
    let sum = 0;
    // // ----- forof loop ------//
    for (let x of prams) {
        sum += x;
    }
    return sum;
}
let sum = rest(1, 2, 3, 4, 5, 6);
console.log(sum);
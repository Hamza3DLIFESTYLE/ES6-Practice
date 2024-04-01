const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

const items = ["item1", "item2", "item3"];
const copyItems = [];

// Before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// After
items.forEach((item) => {
  copyItems.push(item);
});

// for in
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

const numberz = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

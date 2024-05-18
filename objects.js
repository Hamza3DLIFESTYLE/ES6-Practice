const factory = (
  namez, // 'A6 Avant (C8, facelift 2023)'
  body_type, //  'Station wagon (estate)'
  power, // '367 horsepower'
  oil_change_days,
  fuel,
  dimensions,
  ignite,
  RPM
) => {
  return {
    namez: namez,
    body_type: body_type,
    power: power,
    oil_change_days: oil_change_days,
    fuel: fuel,
    dimensions: dimensions,
    ignite: ignite,
    RPM: RPM,
  };
};

const audi6 = factory(
  "A6 Avant (C8, facelift 2023)",
  "Station wagon (estate)",
  "367 horsepower",
  100,
  120,
  { length: 4939, width: 1886, height: 1494, unit: "mm" }
);

const audi5 = factory(
  "A5 Avant (C8, facelift 2023)",
  "Station wagon (estate)",
  "350 horsepower",
  130,
  120,
  { length: 4939, width: 1886, height: 1494, unit: "mm" }
);

const arr = [1, 2, 3, 4, 5];
//arr.push(300);

audi6.model = "2020";
audi5.model = "2021";
// audi.ignite();
// audi.ignite();
// audi.ignite();

// audi.RPM();
// audi.RPM();
// audi.RPM();

console.log(audi5);
//console.log(audi6);

const add = (a, b) => {
  return a + b;
};

const sum = add(5, 10);
console.log(sum);

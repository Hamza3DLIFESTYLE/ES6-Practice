//PROGRAM 1
const bmi_calcultor = (height, weight) => {
    const heightInMeters = height * 0.3048; // 1 foot = 0.3048 meters

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    // let bmi = weight / Math.pow(height * 0.3048);
    console.log(bmi);
    (bmi <= 18) ? console.log("underweight"):
        (bmi > 18.5 && bmi < 24.9) ? console.log("normal range") :
        (bmi > 25.0 && bmi < 29.9) ? console.log("overweight") :
        console.log("obese");
}
console.log(bmi_calcultor(5.9, 92));
//PROGRAM 1
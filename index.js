let studentName = "John Paul Acierto";
let OOPScore = 1.5;
let ElectiveScore = 1.75;
let average = (OOPScore + ElectiveScore) / 2;

console.log(`${studentName}'s average grade is ${average.toFixed(2)}`);

if (average <= 1.0) {
    console.log("Grade: Excellent");
} else if (average <= 1.5) {
    console.log("Grade: Very Good");
} else if (average <= 2.0) {
    console.log("Grade: Good");
} else if (average <= 2.5) {
    console.log("Grade: Satisfactory");
} else if (average <= 3.0) {
    console.log("Grade: Passing");
} else {
    console.log("Grade: Failing");
}

console.log("\n Multiple Students \n");

let students = [
    { name: "Troy", OOP: 1.5, Elective: 1.75 },
    { name: "Earl", OOP: 2.0, Elective: 2.25 },
    { name: "Luchin", OOP: 3.0, Elective: 2.75 },
    { name: "Mark", OOP: 1.0, Elective: 1.25 },
    { name: "Ytac", OOP: 4.0, Elective: 5.0 }, 
];

function getGradeDescription(average) {
    if (average <= 1.0) return "Excellent";
    else if (average <= 1.5) return "Very Good";
    else if (average <= 2.0) return "Good";
    else if (average <= 2.5) return "Satisfactory";
    else if (average <= 3.0) return "Passing";
    else return "Failing";
}

for (let student of students) {
    let avg = (student.OOP + student.Elective) / 2;
    let description = getGradeDescription(avg);
    console.log(`${student.name}'s average: ${avg.toFixed(2)}`);
    console.log(`${student.name}'s grade: ${description}`);
    console.log("------------------------");
}

const students1 = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  return students.reduce((accum,current) => accum + current.score/students.length,0);
}

let result = getAverageStudentScore(students1); // Output: 87.5
console.log(result);
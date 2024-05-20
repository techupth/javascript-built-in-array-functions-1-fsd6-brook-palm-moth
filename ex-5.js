const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  return students.reduce((acc, cur) => acc + cur.score / students.length, 0);
}

const result = getAverageStudentScore(students); // Output: 87.5

console.log(result);

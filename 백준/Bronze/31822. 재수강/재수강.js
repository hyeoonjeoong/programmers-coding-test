const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const target = input[0].slice(0, 5);
const N = parseInt(input[1]);
const lessonList = input.slice(2, 2 + N);

let count = 0;

for (let lesson of lessonList) {
  if (lesson.slice(0, 5) === target) {
    count++;
  }
}

console.log(count);
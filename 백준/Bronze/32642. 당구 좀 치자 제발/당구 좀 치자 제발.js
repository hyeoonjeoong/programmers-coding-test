const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const weather = input[1].split(' ').map(Number);

let angry = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  if (weather[i] === 1) {
    angry += 1;
  } else {
    angry -= 1;
  }
  result += angry;
}

console.log(result);
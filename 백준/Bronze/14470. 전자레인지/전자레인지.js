const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
const D = Number(input[3]);
const E = Number(input[4]);

let time = 0;

if (A < 0) {
  time += D;
  time += -A * C;
  time += B * E;
} else if (A === 0 || A > 0) {
  time += (B - A) * E;
}

console.log(time);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const prices = input.slice(1, N + 1).map(Number);

const M = parseInt(input[N + 1]);
const wants = input.slice(N + 2, N + 2 + M).map(Number);

let total = 0;

for (let menu of wants) {
  total += prices[menu - 1];
}

console.log(total);
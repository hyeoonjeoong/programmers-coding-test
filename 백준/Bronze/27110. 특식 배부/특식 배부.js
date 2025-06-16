const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const [A, B, C] = input[1].split(' ').map(Number);

const result = Math.min(N, A) + Math.min(N, B) + Math.min(N, C);

console.log(result);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0]);
const M = parseInt(input[1]);

console.log(Math.abs(N - M));
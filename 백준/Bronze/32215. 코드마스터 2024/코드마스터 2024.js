const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, m, k] = input.map(Number);

const me = m * k;
const teacher = m;

const result = me + teacher;

console.log(result);
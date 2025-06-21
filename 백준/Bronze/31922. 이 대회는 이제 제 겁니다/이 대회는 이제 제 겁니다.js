const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [A, P, C] = input.map(Number);

const money1 = A + C;
const money2 = P;

console.log(money1 > money2 ? money1 : money2);
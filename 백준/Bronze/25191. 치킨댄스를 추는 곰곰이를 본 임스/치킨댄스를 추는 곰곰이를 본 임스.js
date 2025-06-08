const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const canOrder = Number(input[0]);
const [coke, beer] = input[1].split(' ').map(Number);

const possibleChicken = Math.floor(coke / 2) + beer;

const result = Math.min(possibleChicken, canOrder);

console.log(result);
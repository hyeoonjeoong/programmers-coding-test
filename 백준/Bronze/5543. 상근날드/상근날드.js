const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const burger = input.slice(0, 3).map(Number);
const drink = input.slice(3).map(Number);

const set = Math.min(...burger) + Math.min(...drink) - 50;

console.log(set);
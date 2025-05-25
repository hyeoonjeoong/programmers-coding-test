const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const numList = input[1].split(' ').map(Number);

const result = numList.filter((num) => num < X);

console.log(result.join(' '));
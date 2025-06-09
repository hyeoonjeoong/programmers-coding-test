const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const myMBTI = input[0];
const friends = Number(input[1]);
const friendsMBTI = input.slice(2);

let sameCount = 0;

for (let i = 0; i <= friends; i++) {
  if (friendsMBTI[i] === myMBTI) {
    sameCount++;
  }
}

console.log(sameCount);
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const str = input[i];
  const first = str[0];
  const end = str[str.length - 1];

  console.log(first + end);
}
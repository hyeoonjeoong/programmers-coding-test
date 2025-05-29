const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (num of input) {
  const [M, F] = num.split(' ').map(Number);
  if (M === 0 && F === 0) break;

  console.log(M + F);
}
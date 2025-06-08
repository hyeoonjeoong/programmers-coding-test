const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  const space = ' '.repeat(N - i);
  const star = '*'.repeat(i);

  console.log(space + star);
}
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let line of input) {
  const [first, second] = line.split(' ').map(Number);

  if (first === 0 && second === 0) break;

  if (first > second) {
    result += 'Yes\n';
  } else {
    result += 'No\n';
  }
}

console.log(result);
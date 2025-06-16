const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
  const [A1, P1] = input[1 + i * 2].split(' ').map(Number);
  const [R1, P2] = input[2 + i * 2].split(' ').map(Number);

  const sliceValue = A1 / P1;
  const wholeValue = (Math.PI * R1 * R1) / P2;

  if (wholeValue > sliceValue) {
    console.log('Whole pizza');
  } else {
    console.log('Slice of pizza');
  }
}

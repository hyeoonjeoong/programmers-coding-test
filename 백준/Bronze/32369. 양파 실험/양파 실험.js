const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [N, A, B] = input.split(' ').map(Number);

let good = 1;
let bad = 1;

for (let i = 0; i < N; i++) {
  good += A;
  bad += B;

  if (bad > good) {
    [good, bad] = [bad, good];
  }

  if (bad === good) {
    bad -= 1;
  }
}

console.log(good, bad);
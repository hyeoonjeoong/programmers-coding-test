const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, P] = input[0].split(' ').map(Number);
const think = L * P;
const news = input[1].split(' ').map(Number);

const result = news.map((count) => count - think);

console.log(result.join(' '));
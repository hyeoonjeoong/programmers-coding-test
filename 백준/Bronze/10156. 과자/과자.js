const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [K, N, M] = input.split(' ').map(Number);

const totalPrice = K * N;
const needMoney = Math.max(0, totalPrice - M);

console.log(needMoney);
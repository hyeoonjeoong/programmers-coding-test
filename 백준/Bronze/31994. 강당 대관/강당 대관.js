const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const seminars = input.map((el) => {
  const [name, count] = el.split(' ');
  return { name, count: Number(count) };
});

const result = seminars.reduce((acc, cur) => {
  return cur.count > acc.count ? cur : acc;
});

console.log(result.name);
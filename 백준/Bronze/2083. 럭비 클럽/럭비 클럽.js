const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let user of input) {
  if (user === '# 0 0') break;

  const [name, ageStr, weightStr] = user.split(' ');
  const age = Number(ageStr);
  const weight = Number(weightStr);

  const isJunior = age > 17 || weight >= 80;

  if (isJunior) {
    console.log(`${name} Senior`);
  } else {
    console.log(`${name} Junior`);
  }
}
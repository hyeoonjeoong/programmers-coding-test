const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let result = '';

for (let word of input) {
  if (word === word.toLocaleLowerCase()) {
    result += word.toUpperCase();
  } else {
    result += word.toLocaleLowerCase();
  }
}

console.log(result);
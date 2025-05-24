const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const me = input[0];
const doctor = input[1];

const myA = me.length - 1;
const doctorA = doctor.length - 1;

console.log(myA >= doctorA ? 'go' : 'no');
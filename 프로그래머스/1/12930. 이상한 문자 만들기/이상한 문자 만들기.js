function solution(s) {
  let result = '';
  let idx = 0;
  
  for (const str of s) {
    if (str === ' ') {
      result += ' ';
      idx = 0;
    } else {
      if (idx % 2 === 0) {
        result += str.toUpperCase();
      } else {
        result += str.toLowerCase();
      }
      idx++;
    }
  }

  return result;
}
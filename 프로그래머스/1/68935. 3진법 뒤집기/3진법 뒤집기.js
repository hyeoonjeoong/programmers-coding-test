function solution(n) {
    const reversed3 = n.toString(3).split('').reverse().join('');    
    return parseInt(reversed3, 3)
}
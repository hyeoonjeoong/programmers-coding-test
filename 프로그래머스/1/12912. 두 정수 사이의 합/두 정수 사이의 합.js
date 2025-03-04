function solution(a, b) {
    if (a === b) return a;
    
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    
    let numList = Array((max-min) + 1).fill(min).map((v, i)=> min + i)
    let sum = numList.reduce((acc, cur)=> acc + cur,0)
    
    return sum;
}
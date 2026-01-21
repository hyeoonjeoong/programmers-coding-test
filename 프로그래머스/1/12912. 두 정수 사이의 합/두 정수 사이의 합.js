function solution(a, b) {
    if (a === b) return a;
    
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    
    count = max - min + 1;
    sum = (min + max) * (count / 2)
    
    return sum;
}
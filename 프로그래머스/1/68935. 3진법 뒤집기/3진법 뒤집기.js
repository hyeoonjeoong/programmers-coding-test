function solution(n) {
    let to3 = n.toString(3);
    let reverse = [...to3].reverse().join('');
    
    return parseInt(reverse, 3)
}
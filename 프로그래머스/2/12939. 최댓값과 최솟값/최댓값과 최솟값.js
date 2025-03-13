function solution(s) {
    let num = s.split(" ").map(Number);
    let min = Math.min(...num);
    let max = Math.max(...num);
    
    let answer = `${min} ${max}`

    return answer;
};

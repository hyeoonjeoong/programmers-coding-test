function solution(absolutes, signs) {    
    const formattedNumberArray = absolutes.map((el, i)=> signs[i] ? el : -el)
    const answer = formattedNumberArray.reduce((acc, cur)=> acc + cur, 0)
    
    return answer;
}
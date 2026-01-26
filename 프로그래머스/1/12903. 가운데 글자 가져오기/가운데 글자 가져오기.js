// 홀수 odd, 짝수 even
function solution(s) {
    const type = s.length % 2 === 0 ? 'even' : 'odd'
    const centerIndex = Math.floor(s.length / 2);
    
    return type === 'odd'? s[centerIndex] : s.slice(centerIndex - 1, centerIndex + 1)
}
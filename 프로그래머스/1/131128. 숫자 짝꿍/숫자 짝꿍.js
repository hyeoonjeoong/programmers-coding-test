function solution(X, Y) {
    let answer = '';
    
    const XArr = new Array(10).fill(0);
    const YArr = new Array(10).fill(0);
    
    for(const char of X){
        XArr[char]++;
    }
    for(const char of Y){
        YArr[char]++;
    }
    
    for(let i = 9; i >=0; i--){
        const commonCount = Math.min(XArr[i], YArr[i]);
        answer += String(i).repeat(commonCount);
    }
    
    if(answer === '') return '-1';
    if(answer[0] === '0') return '0'
    
    return answer;
}
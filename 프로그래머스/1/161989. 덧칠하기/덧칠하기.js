function solution(n, m, section) {
    let answer = 0;
    let lastPainted = 0;
    
    for(let i of section){
        if(i > lastPainted){
            answer ++;
            lastPainted = i + m -1;
        }
    }
    return answer;
}
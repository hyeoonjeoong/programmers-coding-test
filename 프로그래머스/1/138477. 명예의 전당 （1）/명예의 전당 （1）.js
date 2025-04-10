function solution(k, score) {
    var answer = [];
    var honorList = [];
    
    for(let i = 0; i < score.length; i++){
        honorList.push(score[i]);
        honorList.sort((a,b) => b - a);
        
        if(honorList.length > k){
            honorList.pop();
        }
        answer.push(honorList[honorList.length - 1])
    }
    return answer;
}
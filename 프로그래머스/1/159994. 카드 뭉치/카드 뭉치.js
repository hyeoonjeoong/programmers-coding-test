function solution(cards1, cards2, goal) {
    let cards1Index = 0;
    let cards2Index = 0;
    
    for(let i = 0; i < goal.length; i++){
        let word = goal[i];
        
        if(word === cards1[cards1Index]){
            cards1Index ++;
        }else if(word === cards2[cards2Index]){
            cards2Index ++;
        }else {
            return 'No';
        }
    }
    return 'Yes';
}
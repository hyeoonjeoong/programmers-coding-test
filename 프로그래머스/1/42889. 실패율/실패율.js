function solution(N, stages) {
    var result = [];
    
    for(let stage = 1; stage <= N; stage++){
        let reachPlayer = stages.filter((el)=> el >= stage).length;
        let notReachPlayer = stages.filter((el)=> el === stage).length;
        
        let fail = reachPlayer === 0 ? 0 : notReachPlayer / reachPlayer;
        
        result.push({stage, fail})
    }
    
    result.sort((a,b)=> {
        if(b.fail === a.fail){
            return a.stage - b.stage;
        }else {
            return b.fail - a.fail;
        }
    })
    
    return result.map((el)=> el.stage)
}
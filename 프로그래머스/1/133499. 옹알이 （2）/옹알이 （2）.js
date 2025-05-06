function solution(babbling) {
    let possible = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    for(let word of babbling){
        let prev = '';
        let idx = 0;
        let isPossible = true;
        
        //ayaye가 들어온다.
        while(idx < word.length){
            let find = false;
            
            for(let p of possible){
                if(word.startsWith(p, idx)){
                    if(prev === p){
                        isPossible = false;
                        break;
                    }
                    prev = p;
                    idx += p.length;
                    find = true;
                    break;
                }
            }
            if(!find){
                isPossible = false;
                break;
            }
        }
        if(isPossible) answer ++;
    }
    return answer;
}

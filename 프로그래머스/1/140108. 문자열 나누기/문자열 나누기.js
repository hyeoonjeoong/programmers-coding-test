function solution(s) {    
    let i = 0;
    let count = 0;
    
    while(i < s.length){
        let startAt = s[i];
        let same = 0;
        let diff = 0;
        
        for (let j = i; j < s.length; j++){
            if(s[j] === startAt){
                same ++;
            }else{
                diff ++;
            }
            
            if(same === diff){
                count ++;
                i = j + 1;
                break;
            }
            
            if(j === s.length - 1){
                count ++;
                i = s.length;
            }
        }
    }
    
    return count;
}
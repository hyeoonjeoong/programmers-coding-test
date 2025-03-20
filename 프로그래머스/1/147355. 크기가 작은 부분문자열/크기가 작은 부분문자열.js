function solution(t, p) {
    let pLength = p.length;
    let target = Number(p);
    let count = 0;
    
    for(let i=0; i<=t.length - pLength; i++){
        let sliced = t.slice(i, i + pLength);
        
        if(Number(sliced) <= target){
            count ++;
        }
    }
    return count;   
}
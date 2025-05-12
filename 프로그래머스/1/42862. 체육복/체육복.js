function solution(n, lost, reserve) {
    let noUniform = lost.filter(el => !reserve.includes(el)).sort((a, b) => a - b);
    let rentOk = reserve.filter(el => !lost.includes(el)).sort((a, b) => a - b);
    
    let able = n - noUniform.length;
    
    for(let i = 0; i < noUniform.length; i++){
        let lostPerson = noUniform[i];
        
        if(rentOk.includes(lostPerson - 1)){
            able ++;
            rentOk = rentOk.filter(el => el !== lostPerson - 1);
        }else if (rentOk.includes(lostPerson + 1)){
            able ++;
            rentOk = rentOk.filter(el => el !== lostPerson +1);
        }
    }
    return able;
}
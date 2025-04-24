function solution(number, limit, power) {
    let pick = [];
    
    for(let i = 1; i <= number; i++){
       let count = getCount(i);
        
       pick.push(count > limit ? power : count)
   }
 
    const totalIronWeight = pick.reduce((acc, cur)=> acc + cur, 0)
    return totalIronWeight;
}

function getCount(n){
    let count = 0;
    
    for(let i = 0; i * i <= n; i++){
        if(n % i === 0){
            count ++;
            if(i !== n/i){
                count ++;
            }
        }
    }
    return count;
}
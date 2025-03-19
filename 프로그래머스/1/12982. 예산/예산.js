function solution(d, budget) {
    let sortedCosts = d.sort((a,b)=> a-b);
    let totalPrice =0;
    let count = 0;

    for(let i=0; i<sortedCosts.length; i++){
        totalPrice += sortedCosts[i];
        if(totalPrice > budget) break;
        count++;
    }
    return count;
}
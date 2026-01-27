function solution(price, money, count) {
    let totalCost = 0;
    for(let i=0; i<=count; i++){
        totalCost += price * i;
    }
    
    return money > totalCost ? 0 : totalCost - money;
}
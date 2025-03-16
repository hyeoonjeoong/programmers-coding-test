function solution(price, money, count) {
    let totalCost = 0;

    for(let i = 1; i < count + 1; i++){
        totalCost += price * i;
    }
    
    if(money > totalCost) return 0;
    
    return totalCost - money
}
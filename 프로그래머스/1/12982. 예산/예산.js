function solution(d, budget) {
    const sorted = [...d].sort((a, b) => a - b);
    let count = 0;
    let remain = budget;
    
    for(const cost of sorted){
        if(remain < cost) break;
        remain -= cost;
        count ++;
    }
    return count;
}
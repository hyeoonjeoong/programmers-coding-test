function solution(t, p) {
    const chop = p.length;
    let count = 0;
    
    for(let i = 0; i <= t.length - chop; i++){
        const str = t.slice(i, i + chop);
        if(str <= p) count ++;
    }
    return count;
}
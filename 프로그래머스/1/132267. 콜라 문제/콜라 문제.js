function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a){
        const changed = Math.floor(n / a);
        const newCoke = changed * b;
        const remain = n % a;
        
        answer += newCoke;
        n = remain + newCoke; 
    }
    return answer;
}
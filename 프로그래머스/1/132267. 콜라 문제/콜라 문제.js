function solution(a, b, n) {
    let result = 0;
    
    while(a <= n){
        let give = Math.floor(n/a) * a;
        let get = Math.floor(give/a) * b;
        
        result += get;
        n = (n - give) + get;
    }
    return result;
}
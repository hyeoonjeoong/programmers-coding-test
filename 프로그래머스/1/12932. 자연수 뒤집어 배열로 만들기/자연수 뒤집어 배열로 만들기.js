function solution(n) {
    var reverseNumArray = String(n).split('').reverse()    
    
    return reverseNumArray.map((el)=> Number(el));
}
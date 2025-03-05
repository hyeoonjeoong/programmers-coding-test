function solution(s){
    var answer = true;
    
    let formattedString = s.toLowerCase()
    answer = formattedString.split('p').length === formattedString.split('y').length
    
    return answer
}
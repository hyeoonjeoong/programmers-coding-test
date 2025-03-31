function solution(food) {
    var answer = '';
    for (let i = 0; i<food.length; i++){
        let count = Math.floor(food[i] / 2);
        answer += String(i).repeat(count)
    }
    return answer + '0' + [...answer].reverse().join('')
}
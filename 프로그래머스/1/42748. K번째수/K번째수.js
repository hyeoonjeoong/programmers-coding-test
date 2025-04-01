// function solution(array, commands) {
//     var answer = [];
    
//     commands.forEach((el) => {        
//         let slicedArr = array.slice(el[0] - 1, el[1]);
//         let sortedArr = slicedArr.sort((a, b) => a - b);
        
//         answer.push(sortedArr[el[2] - 1]);        
//     })
//     return answer;
// }

function solution(array, commands) {
    return commands.map((el)=> {
        const [start, end, target] = el;
         return array.slice(start - 1, end).sort((a,b) => a - b)[target -1]; 
    })
}
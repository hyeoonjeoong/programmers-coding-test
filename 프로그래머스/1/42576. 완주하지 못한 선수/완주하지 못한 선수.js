function solution(participant, completion) {
    const obj = {};
    
    participant.forEach((el) => {
        obj[el] = (obj[el] || 0) + 1;
    })
    completion.forEach((el) => {
        obj[el] -= 1;
    })
    
    for (let name in obj){
        if(obj[name] === 1){
            return name;
        }
    }
}
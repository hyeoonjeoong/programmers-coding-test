function solution(s) {
    let sArr = [...s];
    let obj = {};
    
    let answer = sArr.map((el, i)=> {
        if(obj[el] === undefined){
            obj[el] = i;
            return -1;
        }else {
            const distance = i - obj[el];
            obj[el] = i;
            return distance;
        }
    })
    
    return answer;
}
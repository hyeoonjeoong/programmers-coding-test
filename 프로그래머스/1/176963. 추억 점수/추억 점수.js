function solution(name, yearning, photo) {
    let answer = [];
    const nameToMissScore = {};
    
    name.forEach((el, idx) => {
        nameToMissScore[el] = yearning[idx];
    })
    
    answer = photo.map((arr)=> {
       return arr.reduce((sum, name)=> 
           sum + (nameToMissScore[name] || 0)
       ,0)
    })
    
    return answer;
}
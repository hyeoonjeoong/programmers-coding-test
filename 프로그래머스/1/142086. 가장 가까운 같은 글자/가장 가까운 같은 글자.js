function solution(s) {
    let sArr = s.split('')
    let result = sArr.map((char, i)=>{
        let gap = -1;
        for(let j = i-1; j>=0; j--){
            if(sArr[j] === char){
                gap = i - j;
                break;
            }
        }
        return gap;
    })
    return result;
}
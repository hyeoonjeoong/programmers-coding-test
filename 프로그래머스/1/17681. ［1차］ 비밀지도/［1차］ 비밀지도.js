function solution(n, arr1, arr2) {
    
    const changeBinaryNumber = (arr, n)=> {
        return arr.map((el)=> {
            let change = el.toString(2);
            return change.padStart(n, '0')
        })
    }
    
    let bin1 = changeBinaryNumber(arr1, n);
    let bin2 = changeBinaryNumber(arr2, n);
    let answer = [];
    
    for(let i = 0; i < n; i++){
        let str = '';
        for(let j = 0; j < n; j++){
            if(bin1[i][j] === '1' || bin2[i][j] === '1'){
                str += '#';
            }else {
                str += ' ';
            }
        }
        answer.push(str);
    }
    return answer;
}
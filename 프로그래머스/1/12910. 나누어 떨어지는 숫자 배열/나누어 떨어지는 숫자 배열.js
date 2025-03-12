function solution(arr, divisor) {
    var filteredArr = arr.filter((num)=> num % divisor === 0)
    
    if (filteredArr.length === 0) return [-1];
    return filteredArr.sort((a,b)=> a-b)
}
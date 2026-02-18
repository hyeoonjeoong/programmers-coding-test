function solution(numbers) {
    const arr = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            const num = numbers[i] + numbers[j]
            arr.push(num);
        }
    }
    return [...new Set(arr)].sort((a,b) => a - b);
}
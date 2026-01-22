function solution(numbers){
    const all = Array.from({length: 10}, (_, i) => i)
    const missing = all.filter((el)=> !numbers.includes(el))
    
    return missing.reduce((acc, cur)=> acc + cur, 0)
}

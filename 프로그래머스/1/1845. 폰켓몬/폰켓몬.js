function solution(nums) {
    
    let pick = nums.length / 2;
    let list = new Set(nums).size;
    
    return Math.min(pick, list)
}
function solution(nums) {
    let pick = nums.length / 2;
    let monsterList = new Set(nums).size;
    
    let result = pick > monsterList ? monsterList : pick;
    return result;
}
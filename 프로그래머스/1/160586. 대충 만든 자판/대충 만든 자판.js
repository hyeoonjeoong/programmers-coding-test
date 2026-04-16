function solution(keymap, targets) {
    const map = {};
    
    keymap.forEach((list) => {
        [...list].forEach((char, i) => {
            const count = i + 1;
            if(!map[char] || map[char] > count){
                map[char] = count;
            }
        })
    })
    
    return targets.map((target) => {
        let sum = 0;
        
        for(let char of target){
            if(!map[char]) return -1;
            sum += map[char];
        }
        return sum; 
    })
}
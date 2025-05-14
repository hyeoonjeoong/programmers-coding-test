function solution(ingredient) {
    let count = 0;
    let menu = [];
    
    for(let i = 0; i < ingredient.length; i++){
        menu.push(ingredient[i]);
        
        if(menu.length >= 4){
            const last = menu.slice(-4).join('');
            if(last === '1231'){
                menu.splice(-4);
                count ++;
            }
        }
    }
    
    return count;
}
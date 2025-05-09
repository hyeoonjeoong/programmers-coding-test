function solution(s, skip, index) {
    let toAscii = toChangeAscii(s);
    let skipAscii = toChangeAscii(skip);
    let resultAscii = [];

    for(let i = 0; i < toAscii.length; i++){
        let temp = toAscii[i];
        let moved = 0;
        
        while(moved < index){
            temp ++;
            if(temp > 122) temp = 97;
            
            if(!skipAscii.includes(temp)){
                moved ++;
            }
        }
        resultAscii.push(temp);
    }
    return resultAscii.map(code => String.fromCharCode(code)).join('');
}

function toChangeAscii(string){
    return [...string].map((el)=> {
        let ascii = el.charCodeAt(0);
        return ascii; 
    })
}
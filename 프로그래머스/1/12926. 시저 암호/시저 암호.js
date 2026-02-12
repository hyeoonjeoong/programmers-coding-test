//ascii: A = 65, Z = 90, a = 97, z = 122

function solution(s, n) {    
    return [...s].map((el) => {
        const ascii = el.charCodeAt(0);
        
        if(ascii >= 65 && ascii <= 90){
            return String.fromCharCode(((ascii - 65 + n ) % 26) + 65)
        }
        
        if(ascii >= 97 && ascii <= 122){
            return String.fromCharCode(((ascii - 97 + n ) % 26) + 97)
        }
        
        return el;
    }).join('');
}
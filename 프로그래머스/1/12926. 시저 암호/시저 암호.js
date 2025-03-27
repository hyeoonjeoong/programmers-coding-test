// A = 65, Z = 90, a = 97, z = 122

function solution(s, n) {    
    let result = [...s].map((el, i)=>{
        let ascii = el.charCodeAt(0)
        
        if (65 <= ascii && ascii <= 90){
            return String.fromCharCode((ascii - 65 + n) % 26 + 65)
        }else if(97 <= ascii && ascii <= 122){
            return String.fromCharCode((ascii - 97 + n) % 26 + 97)
        }else {
            return el;
        }
    }).join('')
    
    return result;
}

function getVowelCaps(letter){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(letter.toUpperCase());    
        }, 3000);
        
    });
}


let vowels = ["a","e","i","o","u"];

let promises = vowels.map(item=>{
    return getVowelCaps(item);
});

Promise.all(promises).then(resp=>{
    console.log(resp);
});
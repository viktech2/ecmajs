const uniqid = require('uniqid');


let p = [];
for(i=0;i<100;i++){
    //console.log(uniqid());
    p.push(i);
}

p.map(val=>{
    console.log(uniqid('TC-'));
    //console.log(+ new Date());

});
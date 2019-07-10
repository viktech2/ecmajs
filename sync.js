let log = console.log;

let a =5 ;
let b = 50;

let a1 = (function(){return a;})();

let b1 = (function(){return b;})();

log(a1);
log(b1);


let a2 = function(num){ return 5+num ;};
let b2 = function(){return 50 ;}

log(a2(b2()));


function longRun(){
    // let i = 0;
    // while(i < 1000000){
    //     i++;
    // }
    for(let j= 0; j<1000000; j++){
        
    }
    log('Done');

}

log(new Date().getTime());
longRun();
log(new Date().getTime());


const elems1 = ["Anc", 1, false, "Bloa", 310];

elems1.forEach(element => {
    console.log(element);
});

console.log(elems1);
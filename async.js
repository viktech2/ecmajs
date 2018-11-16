 /**
    setTimeout, callbacks for geolocation, Promises, fetch, ajax, 
    filesystem interaction, database calls, even DOM event listeners
**/

let log = console.log;

let a = 100;
setTimeout( function(){ a++; }, 0);
log(a);
setTimeout( function(){log(a);}, 0);


let p = new Promise(function(resolve, reject){
    setTimeout(function(){
          resolve('Yo');  
    }, 10);

});

log(p);

setTimeout(function(){
    log(p);
}, 0)
log(p);

p.then(function(val){
    log(val);
});
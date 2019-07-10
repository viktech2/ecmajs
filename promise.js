const { Observable } = require('rxjs');


const numberPromise = new Promise(resolve=>{
    resolve(10);
    resolve(20);    

});
//numberPromise.then(res=>{console.log(res)});

const numberObservable = new Observable(observer=>{
    observer.next(10);
    observer.next(20);
});
//numberObservable.subscribe(value=>console.log(value));


const promise = new Promise(() => {
    console.log('Promise- I was called!');
});

const observable = new Observable(() => {
    console.log('Observable-I was called!');
});
observable.subscribe();



let a = 5;
function print(){
    console.log(a);
}

print();
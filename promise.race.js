var promise1 = new Promise((resolve, reject)=>{

    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise((resolve, reject)=>{

    setTimeout(resolve, 400, 'two');
});


Promise.race([promise1, promise2]).then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
});
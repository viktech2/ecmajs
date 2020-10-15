// Blocking for-loop with a timeout of 5 secs using async/await

async function asynchronousCheck (arr){
    // for(let i=0; i < arr.length; i++){
    //     console.log(arr[i]);
    //     await test(arr[i]);
    // }

    // arr.forEach(async (element) => {
    //     console.log(element);
    //     await test(element);
    // });

    for(const item of arr){
        console.log(item);
        await test(item);
    }

        
/*     arr.map(async (item)=>{
        console.log(item);
        await test(item);
    }) */

    // const promises = arr.map(test);
    // await Promise.all(promises);


    console.log('Done!');

}

/* const log = async function(arr){
    for(const item of arr){
        console.log(item);
        await test(item);
    }
} */

const test = function(val){
    return new Promise(resolve=>{
        setTimeout(function(){
            //console.log(val);
           resolve(val);     
        }, 2000);

    });

}

let arrTest = ['A', 'B', 'C'];
asynchronousCheck(arrTest);
//console.log('Hello');

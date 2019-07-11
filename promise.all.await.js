const fetch = require("node-fetch");


const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];

//console.log(urls.entries());return;

async function getTools(){
    const promises = urls.map(async(url, idx)=>{
        console.log(url);
        console.log(`Received Todo ${idx+1}:`, await fetch(url));
    });

    await Promise.all(promises);

    console.log('Finished');
}

getTools();


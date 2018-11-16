
/* Reduce functions */
const posts = [
    {id: 1, upVotes: 2},
    {id: 2, upVotes: 89},
    {id: 3, upVotes: 1}
];

const totalUpvotes = posts.reduce((totalUpvotes, currentPost)=>{
   return totalUpvotes + currentPost.upVotes;
    //console.log(currentPost.upVotes);
}, 0);
console.log(totalUpvotes);

const numbers = [1, -1, 2, 3];

// old way
let s = 0
for(let n of numbers)
    s += n;

console.log(s);


const sum = numbers.reduce((accumulator, currentValue)=>{
    console.log(accumulator);
    return accumulator + currentValue;
})

console.log(sum);

/*  Spread operator */

const middle = [3, 4];
const arr = [1, 2, middle, 5, 6]; console.log(arr);
const arr1 = [1, 2, ...middle, 5, 6]; console.log(arr1);


const a = [{name: 'A'}, {name: 'B'}];
const b = [...a];console.log(b);


const arr2 = [1, 2, 3];
const arr3 = [...arr2];
arr3.push(4);console.log(arr3);
console.log(arr2);


const q = [1,2,3];
console.log(Math.max.apply(null, q));
console.log(Math.max(...q));

//Adding an element to array
const vowels = ['a', 'e', 'i', 'o'];
const newV = [...vowels, 'u'];

console.log(newV);


//Adding an element to an array of objects
const books = [];
const newBook = {title: 'Alice in wonderland', id: 1};

const updatedBooks = [...books, newBook];

console.log(updatedBooks);

//Adding a key value pair to an object
const user = {name: 'vikash'};
const upUser = {...user, age:22};

console.log(upUser);


//Adding a key value pair with dynamic key
const u = {name : 'vikash'};
const dk = 'isMale';

const uP = {...u, [dk]: true};
console.log(uP);

//Find and replace key value pair in array of objects
const ps = [
    {id: 1, title: '123'},
    {id: 2, title: 'XYZ'}
];

const ups = ps.map(p => p.id !== 1 ? 
    p : {...p, title: 'ABC'}
);

console.log(ups);


const posts1 = [
    {id: 1, title: 'Title 1'},
    {id: 2, title: 'Title 2'}
  ];
  
  const updatedPosts = posts1.map(p => p.id !== 1 ?
    p : {...p, title: 'Updated Title 1'}
  );

  console.log(updatedPosts);



/* Find */  

//Find an element inside an array of objects
const posts2 = [
    {id: 1, title: 'Title 1'},
    {id: 2, title: 'Title 2'}
  ];

const findp = posts2.find(p => p.id === 2);
console.log(findp);


const nodeIdTypeArr = [
    {nodeId: "c8", type: "op"},
    {nodeId: "c14", type: "qc"}
];

const findNode = nodeIdTypeArr.find(p => p.nodeId == 'c14');

if(findNode !== undefined && findNode.type == 'op'){
    console.log(findNode);

}


//Find index of element in an array of objects

const posts3 = [
    {id: 13, title: 'Title 221'},
    {id: 5, title: 'Title 102'},
    {id: 131, title: 'Title 18'},
    {id: 55, title: 'Title 234'}
  ];

const req = posts3.map(p => p.id).indexOf(55);
console.log(req);

  
/* filter */

// remove element from array
const toremove = 5;
const main = [1, 3, 5, 9, 10];

const res = main.filter(id => id !== toremove);
console.log(res);
console.log(main);


/* cloning object */

const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    } 
};
// --old way--
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// --Modern JS--
//const another = Object.assign({}, circle);
//const another = Object.assign({color:'red'}, circle);

// -- spread operator

const another = {...circle, color:'red'};
console.log(another);
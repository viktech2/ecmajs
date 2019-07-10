const ts = [{task_id:"ksie73js", node_id:"c8", delivery_available:1},
{task_id:"ksie73js", node_id:"c8", delivery_available:1},
{task_id:"AVXHA", node_id:"c14", delivery_available:0},
{task_id:"KOSIE", node_id:"c14", delivery_available:0},
{task_id:"KKKAL", node_id:"c8", delivery_available:0}];

const nodes = ["c8","c14"];

nodes.forEach(nodeId=>{
    let data = ts.filter(a=>{
        if(a.node_id === nodeId && a.delivery_available === 0){
            return true
        }
    });
    console.log(data);
});

console.log('hello');

//const d = ts.filter(a=>a.node_id === "c14");
//console.log(d);

/* let nodeSet : Set<string> = new Set<string>(requeu_req.map(a => a.node_id));
    let searchSet = new Set<string>([...nodeSet]);
    let resultSet = new Set<string>();
    //let
    do {
        resultSet.clear();
        searchSet.forEach(elem => {
            flow_path.filter(a => a.start === elem).forEach(b => { nodeSet.add(b.end); resultSet.add(b.end)})
        })
        searchSet = resultSet;
    }while( resultSet.size === 0 );
    return nodeSet; */

// 1 op 1 qc sequntial    
/*
let dependency:Array<any> = [{"c8":{"dependencyId":[], "judgement":1, "type":"op"}},{"c14":{"dependencyId":["c8"],"judgement":1,"percent":100,"type":"qc"}}];
let nodePath : Array<any> = [{start:"c2", end:"c8"}, {start:"c8", end:"c14"}, {start:"c14", end:"c20"}];
*/

// 2 op 1 qc sequential
/*
let dependency:Array<any> = [{"c8":{"dependencyId":[], "judgement":1, "type":"op"}},{"c14":{"dependencyId":["c8"],"judgement":1,"type":"op"}},{"c20":{"dependencyId":["c14"],"judgement":1,"type":"qc", "percent":100}}];
let nodePath : Array<any> = [{start:"c2", end:"c8"}, {start:"c8", end:"c14"}, {start:"c14", end:"c20"}, {start:"c20", end:"c26"}];
*/

// 2 op 1 qc parallel
let dependency : Array<any> = [{"c8":{"dependencyId":[], "judgement":1, "type":"op"}},{"c14":{"dependencyId":[],"judgement":1,"type":"op"}},{"c20":{"dependencyId":["c8","c14"],"judgement":1,"percent":100,"type":"qc"}}];
let nodePath : Array<any> = [{start:"c2", end:"c8"}, {start:"c2", end:"c14"}, {start:"c8", end:"c20"}, {start:"c14", end:"c20"}, {start:"c20", end:"c26"}];

let nodes:Array<string> = [];
dependency.forEach(elm=>{
    nodes.push(Object.keys(elm)[0]);
})
//console.log(nodes.sort());
console.log(nodes);


let nPath : Array<any> = nodePath.filter(a=>{    
    return (nodes.indexOf(a.start) >= 0 && nodes.indexOf(a.end) >= 0);
});


console.log(nPath);



/* let m = ['2','4','1'];
console.log(m.sort());
 */

let reqNodeId:Array<string> = ["c14"];

console.log(nodePath.length);

let searchSet = new Set<string>(reqNodeId);
let resultSet = new Set<string>();
searchSet.forEach(elm=>{
    nodePath.filter(a => a.start === elm)
    .forEach((b, i)=>{
        console.log(i);
        resultSet.add(b.end);
    });
})

console.log(resultSet)



const elems:Array<any> = ["Anc", 1, false, "Bloa", 310];

elems.forEach(element => {
    console.log(element);
});

console.log(elems);
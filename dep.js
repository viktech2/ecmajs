let nodeDependencyTbl = [{"c8":{"dependencyId":[0],"distribute_count":1,"judgement":"1","node_status":"prepare","submit_count":1,"task_data":[{"img_path":["https://beta.imerit.net/tasking/uploads/images/070617_street3_gray/gray_frame_ts_0016500.png"]},{"config":[[]]}],"task_time":"1","type":"op"}},{"c14":{"dependencyId":["c8"],"distribute_count":0,"judgement":"1","node_status":"buffered","percent":"100","submit_count":0,"task_data":[{"key1":[[{"attribute":[["occluded",false],["truncated",false]],"class":[["type","car"],["part","back"]],"coordinates":[{"x":4.247787610619469,"y":12.74336283185841},{"x":130.08849557522126,"y":12.74336283185841},{"x":130.08849557522126,"y":104.60176991150443},{"x":4.247787610619469,"y":104.60176991150443}],"deleted":false,"id":"pUxYr1533040965725","mapelem":["class","attribute"],"object_type":"bbox"}]]},{"img_path":["https://beta.imerit.net/tasking/uploads/images/070617_street3_gray/gray_frame_ts_0016500.png"]},{"config":[[]]}],"type":"qc"}}];

let nodeIdArr = [];

let nodeIdTypeArr = [];
nodeDependencyTbl.map(depen=>{
    let nodeId = Object.keys(depen)[0];
    console.log(nodeId);

    let nodeStatus = depen[nodeId].node_status;   
     console.log(nodeStatus);

    let nodeType = depen[nodeId].type;
    console.log(nodeType);    

    if(depen[nodeId].node_status == 'prepare'){
        nodeIdArr.push(nodeId);
        nodeIdTypeArr.push({type: depen[nodeId].type, nodeId: nodeId});
    }
});

// for (let i in nodeDependencyTbl){
//     let k = Object.keys(nodeDependencyTbl[i])[0];

//     if(nodeDependencyTbl[i][k].node_status == 'prepare'){
//         nodeIdArr.push(k);
//     }

// }

console.log(nodeIdArr);
console.log(nodeIdTypeArr);

nodeIdTypeArr.map(val=>{
    console.log(val.nodeId);
})
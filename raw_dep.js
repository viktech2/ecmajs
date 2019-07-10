let nodeDependency = [{"c8": {"type": "op", "judgement": "1", "task_time": "1", "dependencyId": [0]}}, {"c20": {"type": "qc", "percent": "100", "judgement": "1", "task_time": "1", "dependencyId": ["c8", "c14"]}}, {"c14": {"type": "op", "judgement": "1", "task_time": "1", "dependencyId": [0]}}];



let batchTaskStructureNode = {};
for (let nd of nodeDependency){
    let nodeId = Object.keys(nd)[0];
    let statusProp = {};     
    let counterProp = {distribute_count:0, submit_count:0, ready_counter:0};

    if(nd[nodeId].dependencyId.length && nd[nodeId].dependencyId.indexOf(0) >= 0){
        // having no dependency
        statusProp = {status:"prepare"};
    }else{
        // having node dependent on other node
        statusProp = {status:"buffered"};
    }

    batchTaskStructureNode[nodeId] = {...nd[nodeId], ...statusProp, ...counterProp};

}


console.log(batchTaskStructureNode);


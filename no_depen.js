let nodeDependency = [{"c8": {"type": "op", "judgement": "1", "task_time": "1", "dependencyId": []}}, {"c20": {"type": "qc", "percent": "100", "judgement": "1", "task_time": "1", "dependencyId": ["c8", "c14"]}}, {"c14": {"type": "op", "judgement": "1", "task_time": "1", "dependencyId": []}}];



let nodeToCreate = [];
for (let nd of nodeDependency){
    let nodeId = Object.keys(nd)[0];console.log(nd[nodeId].dependencyId)
    
    console.log(nd[nodeId].dependencyId.length)
    if(!nd[nodeId].dependencyId.length){
        nodeToCreate.push(nodeId);
    }

}


console.log(nodeToCreate);


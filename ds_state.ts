interface IRequeueReqElem {
    node_id: string,
    clean_state: boolean
}


let nodesAffected:Array<string> = ["c14","c20"];
let requeue_req:Array<IRequeueReqElem> = [{node_id: "c14", clean_state: false}];
let setBody : any = {}
    
let reqTime = Date.now();
nodesAffected.forEach(node=>{

    let ds_state:Array<any> = requeue_req.filter(a=>(a.node_id === node));
    console.log(ds_state);
    setBody[node] = {"incarnation_num": reqTime, "clean_state": (ds_state.length) ? ds_state[0].clean_state: true};
});

console.log(setBody);
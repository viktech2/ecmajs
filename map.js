let tpDetails = [ { dependency_table: [{"c8":{"dependencyId":[0],"distribute_count":1,"judgement":"1","node_status":"prepare","submit_count":1,"task_data":[{"img_path":["https://beta.imerit.net/tasking/uploads/images/070617_street3_gray/gray_frame_ts_0016500.png"]},{"config":[[]]}],"task_time":"1","type":"op"}},{"c14":{"dependencyId":["c8"],"distribute_count":0,"judgement":"1","node_status":"buffered","percent":"100","submit_count":0,"task_data":[{"key1":[[{"attribute":[["occluded",false],["truncated",false]],"class":[["type","car"],["part","back"]],"coordinates":[{"x":4.247787610619469,"y":12.74336283185841},{"x":130.08849557522126,"y":12.74336283185841},{"x":130.08849557522126,"y":104.60176991150443},{"x":4.247787610619469,"y":104.60176991150443}],"deleted":false,"id":"pUxYr1533040965725","mapelem":["class","attribute"],"object_type":"bbox"}]]},{"img_path":["https://beta.imerit.net/tasking/uploads/images/070617_street3_gray/gray_frame_ts_0016500.png"]},{"config":[[]]}],"type":"qc"}}],
    job_code: 'JC-SJoEUpvJE',
    task_code: 'TC-3w9kd3n2jpdvnr8g',
    task_master_id: 'TM-3w9kd3n2jpdvnr8f' }];

    //let tpDetails = [];
    
    tpDetails.map(val=>{
        console.log('In');
        console.log(val.task_code);

    });

/*     for (let [index, val] of tpDetails){
        console.log(index);
        console.log('In');
        console.log(val.task_code);
    } */

    

   
let prevMasterTaskId = ['TC1', 'TC1', 'TC2', 'TC6', 'TC2'];

let res = prevMasterTaskId.filter((item, pos)=>{
    return prevMasterTaskId.indexOf(item) == pos;
});

console.log(res);
const fs = require("fs"); //Load the filesystem module
const stats = fs.statSync("/home/imerit/Downloads/availableShiftController.js");
const fileSizeInBytes = stats.size;
//Convert the file size to megabytes (optional)
const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;

console.log(fileSizeInMegabytes);

if(fileSizeInMegabytes > 8){
    console.log('Size Limit Reached');
}
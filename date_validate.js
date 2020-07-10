const moment = require('moment');
const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const states =  [
    {
      "state": "submitted",
      "start_time": "2020-06-29 11:43:59",
      "end_time": "2020-06-29 11:44:08"
    },
    {
      "state": "paused",
      "start_time": "2020-07-10 00:45:09",
      "end_time": "2020-07-10 12:44:08"
    }	
];

let stateStartTimeCheck = false;
let stateEndTimeCheck = false;
let stateStartTimeFlag = false;
let stateEndTimeFlag = false;
for(let item of states){
	let startTime = moment(new Date(item.start_time)).format(dateFormat);
	let endTime = moment(new Date(item.end_time)).format(dateFormat);
	console.log('states.start_time:', startTime);
	console.log('states.end_time:', endTime);

	// valid format of states.start_time
	if(!moment(startTime, dateFormat, true).isValid()){
		stateStartTimeCheck = true;
		break;
	}
	// valid format of states.end_time
	if(!moment(endTime, dateFormat, true).isValid()){
		stateEndTimeCheck = true;
		break;
	}


	// Validation - states.start_time can not be after current time
	if(moment(startTime).isAfter(moment().format(dateFormat))){
		stateStartTimeFlag = true;
		break;
	}
	// Validation - states.end_time can not be before start_time
	if(moment(endTime).isBefore(moment(startTime))){
		stateEndTimeFlag = true;
		break;
	}

}

if(stateStartTimeCheck){
	console.log({
		message:'Error: Invalid format for states.start_time!',
		appcode: 50006
	});
}
if(stateEndTimeCheck){
	console.log({
		message:'Error: Invalid format for states.end_time!',
		appcode: 50006
	});
}

if(stateStartTimeFlag){
	console.log({
		message: 'Error: states.start_time can not be after the current time', 
		appcode: 50006
	})
}
if(stateEndTimeFlag){
	console.log({
		message: 'Error: states.end_time can not be before the start_time', 
		appcode: 50006
	})
}



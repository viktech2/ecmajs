let layout_fields = [
        {
            "id": 5,
            "field_name": "start_time",
            "field_name_display": "START TIME"
        },
        {
            "id": 6,
            "field_name": "end_time",
            "field_name_display": "END TIME"
        },
        {
            "id": 7,
            "field_name": "status",
            "field_name_display": "STATUS"
        },
        {
            "id": 8,
            "field_name": "task_identifier",
            "field_name_display": "TASK IDENTIFIER"
        },
        {
            "id": 5,
            "default_value": "A",
            "field_name": "status",
            "field_name_display": "cf1"
        },
        {
            "default_value": "B",
            "field_name": "custom_field_2",
            "field_name_display": "cf2 _"
        }
];

let fieldNameArr = layout_fields.map(item=>{return item.field_name});
console.log(fieldNameArr);
    let isFieldNameDuplicate = fieldNameArr.some((elem, idx)=>{
        return fieldNameArr.indexOf(elem) != idx;
    });
console.log('isDuplicate:', isFieldNameDuplicate);
    if(isFieldNameDuplicate){
	console.log('duplicate field name');
	return {
            appcode: 50006,
            message: 'Error: Field name is duplicate in layout fields!'
        };

    }

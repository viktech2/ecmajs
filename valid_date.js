$(function(){
  var dateFormat = 'DD-MM-YYYY';
  $('.validateDate').click(function(){
      //alert(moment(moment("2012-10-19").format(dateFormat),dateFormat,true).isValid());
      //const dt= moment("2011");//.format('YYYY-MM-DD HH:mm:ss');
      //alert(dt);
      //alert(moment(dt, 'YYYY-MM-DD HH:mm:ss').isValid());
      
      const date = '2011-10-05T14:48:00.000Z';
			const dateFormat = 'YYYY-MM-DD HH:mm:ss';
			const toDateFormat = moment(new Date(date)).format(dateFormat);
      alert(toDateFormat);
	alert(moment(toDateFormat, dateFormat, true).isValid());
  });
});

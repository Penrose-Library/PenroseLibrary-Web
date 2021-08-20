
(function($){

  $(function(){   
	var $availcomp=0;
	//bike
	$.ajax({
           url: 'https://penroselib-php.herokuapp.com/bike.php',
           type: 'GET',
           dataType: 'json',
	       cache:false,
 	}).done(function( msg ) {
		var output=(msg.Total-msg.CheckedOut)+" available";
		$('#bikeshare').html(output);
	 });

	//study room
	 $.ajax({
           url: 'https://penroselib-php.herokuapp.com/studyroom.php',
           type: 'GET',
           dataType: 'json',
		   cache:true
 	}).done(function( msg ) {
	var output=(msg.Total-msg.CheckedOut) + ' available.';
	$('#studyroom').html(output);
	});
	
	//SenSource
	$.ajax({
           url: 'https://library.whitman.edu/cfworker/spacecount',
           type: 'GET',
		   dataType: 'text'
 	}).done(function( msg ) {
	var output= (msg) + ' people';
	$('#buildingoccupancy').html(output);
	});
	
	//library hours
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth(); //January is 0!
	var yyyy = today.getFullYear();
	var monthname = new Array ("Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec." );
	if(dd<10) {
		dd='0'+dd;
	} 
	today = monthname[mm]+' '+dd+' , '+yyyy;
	$('#date').html(today);
	$.ajax({
		url: "https://penroselib-php.herokuapp.com/calendar/libraryhour.php",
		cache: true,
		dataType: 'json'
	})
	.done(function( hours ) {
		$('#today').html('<a href="https://www.google.com/calendar/embed?src=whitman.edu_49tmb5t3aoa3k0t05vmp58cfeo%40group.calendar.google.com&ctz=America/Los_Angeles" rel="noreferrer" target="_blank">'+hours[0]['summary']+"</a>");
	});
	//reference calendar
	$.ajax({
			url: "https://penroselib-php.herokuapp.com/calendar/reference.php",
			dataType: 'json'
	}).done(function( hours ) {
		refhtml='<p>If you need help, please send us an email using the link above.</p>';
		for (var x in hours) {
		if(typeof hours[x] !== 'undefined'){
			if( hours[x].notes !== null ){
				console.log(hours[x]);
				refhtml='<div class="reference-text pull-left"><span style="color:green">'+hours[x].notes.name+'</span> is available for research help until '+hours[x].dtend+'. <a href="mailto:'+hours[x].notes.email+'">'+hours[x].notes.email+'</a></div>  <div class="reference-picture pull-right">   <img src="'+hours[x].notes.photo+'" alt="'+hours[x].notes.name+'"/></div>';
				
			}//end first if
			}//end if
		}//end for
		$('#reference').html(refhtml);
		});
  }); // end of document ready
})(jQuery); // end of jQuery name space




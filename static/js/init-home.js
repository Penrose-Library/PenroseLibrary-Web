
(function($){

  $(function(){   
	var $availcomp=0;

	 //building map
	$('#mapclick').click(function(){
	    $('#mapt').show();
	})

  	$('#map1st').click(function(){
	    $('#floormap').attr('src','./wp-content/themes/whitman/additional/res/map/library-map-v4-5_FirstFloor.svg');
	})
	$('#map2nd').click(function(){
	    $('#floormap').attr('src','./wp-content/themes/whitman/additional/res/map/library-map-v2019-01_SecondFloor.svg');
	})
	$('#map3rd').click(function(){
	    $('#floormap').attr('src','./wp-content/themes/whitman/additional/res/map/library-map-v4-5_ThirdFloor.svg');
	})
	$('#map4th').click(function(){
	    $('#floormap').attr('src','./wp-content/themes/whitman/additional/res/map/library-map-v4-5_FourthFloor.svg');
	})
	//bike
	$.ajax({
           url: 'https://penroselib-php.herokuapp.com/bike.php',
           type: 'GET',
           dataType: 'json',
	       cache:false,
 	}).done(function( msg ) {
		var output=" There are "+(msg.Total-msg.CheckedOut)+" available bikes.";
		$('#bikeshare').html(output);
	 });

	//study room
	 $.ajax({
           url: 'https://penroselib-php.herokuapp.com/studyroom.php',
           type: 'GET',
           dataType: 'json',
		   cache:true
 	}).done(function( msg ) {
	var output=" There are "+(msg.Total-msg.CheckedOut) + ' available study rooms.';
	$('#studyroom').html(output);
	});
	
	//SenSource
	$.ajax({
           url: 'https://library.whitman.edu/cfworker/spacecount',
           type: 'GET',
		   dataType: 'text'
 	}).done(function( msg ) {
	var output=" There are "+(msg) + ' people currently in the building.';
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
				refhtml='<div class="reference-text no-up-margin"><span style="color:green">'+hours[x].notes.name+'</span> is available for chat until '+hours[x].dtend+'<br/><a href="mailto:'+hours[x].notes.email+'">'+hours[x].notes.email+'</a>.</div>  <div class="reference-picture no-up-margin">   <img src="'+hours[x].notes.photo+'" class="responsive-img reference-img no-up-margin" style="width:30%" alt="'+hours[x].notes.name+'"/></div>';
				
			}//end first if
			}//end if
		}//end for
		$('#reference').html(refhtml);
		});
  }); // end of document ready
})(jQuery); // end of jQuery name space




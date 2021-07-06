

function load_newitem(){
}

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
    /*
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
				refhtml=' <div class="reference-text left col s8">                <span style="font-weight: bold;font-size: 13px; line-height: 16px; color:green">'+hours[x].notes.name+'</span> is available for chat until '+hours[x].dtend+'<br/><a href="mailto:'+hours[x].notes.email+'">'+hours[x].notes.email+'</a><br/>Call: 833PENROSE (833-736-7673) and leave a voicemail.</div>                <div class="reference-picture left col s4 hide-on-med-only">   <img src="'+hours[x].notes.photo+'" class="responsive-img" style="width:80%" alt="'+hours[x].notes.name+'"/></div>';
				//refhtml=' <div class="reference-text left col s8">                <span style="font-weight: bold;font-size: 13px; line-height: 16px; color:green">'+hours[x].notes.name+'</span> will be in office '+hours[x].notes.office+' until '+hours[x].dtend+'<br/><a href="mailto:'+hours[x].notes.email+'">'+hours[x].notes.email+'</a><br>'+hours[x].notes.phone+'</div>                <div class="reference-picture left col s4 hide-on-med-only">   <img src="'+hours[x].notes.photo+'" class="responsive-img" alt="'+hours[x].notes.name+'"/></div>';
			}//end first if
			}//end if
		}//end for
		$('#reference').html(refhtml);
		});
        */
	//new item function*/
	$.ajax({
       url: 'https://penroselib-php.herokuapp.com/newitem/newlist_feed.php',
            dataType: 'json',
			cache:true
 			}).done(function(bibarray) {
			bibliographicNumber=bibarray.id;
			isbn=bibarray.isbn;
			title_author=bibarray.title+bibarray.author;	
			$('#newitem').html('<div class="card medium"><div id="text-book-jacket"> <img src="https://images.btol.com/ContentCafe/Jacket.aspx?UserID=WHTM43002&Password=CC69392&Return=T&Type=M&Value='+isbn+'" style="width:100%;height:auto" alt="image for book cover" /></div><div class="jacket-title"><a href="http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&vid=WHITC&tab=default_tab&mode=Basic&group=GUEST&onCampus=true&displayMode=full&displayField=all&search_scope=whitc_alma&query=any,contains,' + bibliographicNumber + '">' + title_author + '</a></div>');	
    });
    


  }); // end of document ready
})(jQuery); // end of jQuery name space




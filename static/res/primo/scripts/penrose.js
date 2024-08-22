var date = new Date;
var hour = date.getHours();	
console.log(hour);
$(document).ready(function(e) {
	
  
 //library hours
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth(); //January is 0!
	var yyyy = today.getFullYear();
	var monthname = new Array ("Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec." );
	if(dd<10) {
		dd='0'+dd
	} 
	today = monthname[mm]+' '+dd+' , '+yyyy;
	$('#date_hours').html(today);
	$.ajax({
		url: "http://penrose.whitman.edu/calendar/libraryhour.php",
		cache: true,
		dataType: 'json'
	})
	.done(function( hours ) {
		$('#today').html(hours[0]["summary"]);
	});
		
		
		//load wordpress news		
		$.ajax({
       url: 'http://www.whitman.edu/xsd/penrose/blog?_='+hour,
            dataType: 'json',
			jsonp: "callback"
 			}).done(function(JSONObject ) {
			
			 $.each(JSONObject["posts"],function( key, value){
				 	var title = value['title'];
					var excerpt = value['excerpt'];
				$('div#news'+key).html('<div class="news_entry_title"><a href="'+value['URL']+'">'+title+'</a></div>			<div class="news_entry_text">'+excerpt+'</div>');
				
			 });
   		 });		
});

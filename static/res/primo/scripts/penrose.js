var date = new Date;
var hour = date.getHours();	
console.log(hour);
$(document).ready(function(e) {
	//load new books
		$.ajax({
       url: 'http://penrose.whitman.edu/newitem/newlist_feed.php',
            dataType: 'jsonp',
			jsonp: "callback"
 			}).done(function(bibarray) {
			bibliographicNumber=bibarray.id;
			isbn=bibarray.isbn;
			title_author=bibarray.title+bibarray.author;
	$('#text-book-jacket').append('<a href=\"http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&vid=WHITC&tab=default_tab&mode=Basic&group=GUEST&onCampus=true&displayMode=full&displayField=all&search_scope=whitc_alma&query=any,contains,' + bibliographicNumber + '\">'	+ '<img src=\"http://images.btol.com/ContentCafe/Jacket.aspx?UserID=WHTM43002&Password=CC69392&Return=T&Type=M&Value='+isbn+'\"  height=\"150\"/>' + '</a>');					
				$('#text-book-title').append('<a href=\"http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&vid=WHITC&tab=default_tab&mode=Basic&group=GUEST&onCampus=true&displayMode=full&displayField=all&search_scope=whitc_alma&query=any,contains,' + bibliographicNumber + '\">' + title_author + '</a>');		
	 });
  
  
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

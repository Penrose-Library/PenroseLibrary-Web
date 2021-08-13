
$(document).ready(function(e) {
	
	$.ajax({
       url: 'http://penrose.whitman.edu/newitem/newlist_feed.php',
            dataType: 'jsonp',
			jsonp: "callback"
 			}).done(function(bibarray) {
			bibliographicNumber=bibarray.id;
			isbn=bibarray.isbn;
			title_author=bibarray.title+bibarray.author;
	$('#text-book-jacket').append('<a href=\"http://sherlock.whitman.edu/' + bibliographicNumber + '\">'	+ '<img src=\"http://images.btol.com/ContentCafe/Jacket.aspx?UserID=WHTM43002&Password=CC69392&Return=T&Type=M&Value='+isbn+'\"  height=\"150\"/>' + '</a>');					
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
	
//penrose blog	
	$.ajax({
       url: 'https://public-api.wordpress.com/rest/v1.1/sites/82309994/posts/?order_by=date&category=Homepage&status=publish&number=3',
            dataType: 'json',
			jsonp: "callback"
 			}).done(function(JSONObject ) {
			
			 $.each(JSONObject["posts"],function( key, value){
				 	var title = value['title'];
					var excerpt = value['excerpt'];
				$('div#news'+key).html('<div class="news_entry_title"><a href="'+value['URL']+'">'+title+'</a></div>			<div class="news_entry_text">'+excerpt+'</div>');
				
			 });
   		 });


$("#primoQueryTemp").autocomplete({
    source: function (request, response) {
        $.ajax({
           url: "http://primo-instant-na.hosted.exlibrisgroup.com:1997/solr/ac",
			dataType: "jsonp",
			jsonp: "json.wrf",
			data: {
				q: request.term,
				wt: "json",
				facet: "off",
				fq: "scope:(71406ca0-f312-4aa8-868c-a0565c20e441) AND context:(L OR C)",
				rows:6
			},
            success: function (data) {
				var autocomplete = new Array();
               $.map(data, function(v,i){
                   if(typeof v.docs !== "undefined"){
                      $.each(v.docs, function(index, value) {
						  console.log(value.text);
							autocomplete.push(value.text);
						});
					  
                     
				   }
                });
				response(autocomplete);
				console.log(autocomplete);
            }
        });
    },
	 minLength: 2
});



	
$("#dialog-confirm").dialog({autoOpen:false,resizable:false,height:160,width:260,modal:true,buttons:{"Mobile site":function(){$(this).dialog("close");document.location="/penrose/m";},"Desktop site":function(){$(this).dialog("close");}}});if(screen.width<=800){$("#dialog-confirm").dialog("open");}
	


//pannel subject guide

	 var allPanels = $('.accordion > dd').hide();
		
			  $('.accordion > dt > a').click(function() { 

			  $this = $(this);
			  $target =  $this.parent().next();
			  
			  if(!$target.hasClass('active'))
			  {
				 allPanels.removeClass('active').slideUp();
					
					
					var evenleftposition = 1;
				
					//  if firefox and if right entry panel, need to adjust left margin by 1px.
					var leftmargin = '0px';
					var width = '180px';

					($target).css({'background-color':'#8B8579','position':'relative','z-index':'1','width': width , 'margin-top': '6px', 'margin-left':leftmargin,'padding-right':'0px','padding-left':'30px'});				
			
				 $target.addClass('active').slideDown();
			
			  }
			  else  //upward
			  {
				
				 allPanels.slideUp();
				 allPanels.removeClass('active');
            		  }
				return false;
		 	 });	


		 



});


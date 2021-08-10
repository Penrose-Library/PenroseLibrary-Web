var globalcat;
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

function loadnewbook(count,cat){
	count = typeof count !== 'undefined' ? count : 0;
	$.ajax({
      		url: 'http://penrose.whitman.edu/newitem/newlist_complete.php',
            dataType: 'jsonp',
			type: "POST",
			data: { count: count, cat:cat },
			jsonp: "callback"
 			}).done(function(bibarrays) {
				$.each(bibarrays,function( index,bibarray ) {	
				bibliographicNumber=bibarray.id;
				isbn=bibarray.isbn;
				title_author=bibarray.title+bibarray.author;
				callno=bibarray.callno;
				publisher=bibarray.publisher;
				receivingdate=bibarray.receivingdate;
				
	if(index==0){
		 var d=new Date(receivingdate);
		 $('h1').html('New Materials for '+ month[d.getMonth()] );
	}else{
		 $ac='';
	}
	
	 $html='<div class="bookContainer"><div class="book_jacket"><img height="116" src="http://images.btol.com/ContentCafe/Jacket.aspx?UserID=WHTM43002&amp;Password=CC69392&amp;Return=T&amp;Type=S&amp;Value='+isbn+'" /></div><ul class="book_content"><ul class="book_content"><li class="title"><a class="entry_title" href="http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&vid=WHITC&tab=default_tab&mode=Basic&group=GUEST&onCampus=true&displayMode=full&displayField=all&search_scope=whitc_alma&query=any,contains,' + bibliographicNumber + '">' + title_author + '</a></li><li><span class="item_label">Call #:&nbsp;&nbsp;</span>'+callno+'</li><li></li></ul></ul><dl class="accordion">  <dt>&nbsp;</dt><dd style="display: none;"><ul><li><span class="item_label">Publisher:&nbsp;&nbsp;</span>'+publisher+'</li></ul></dd></dl></div>';	
	
	$('#main_panel').append($html);
	lastdig=index;
	});
	
		//each end
		
		$( '#wantmore' ).attr('data-entry',count);
		if((lastdig+1)%30==0){
			 $('#wantmore').show();
		}else{
			console.log(lastdig);
			$('#wantmore').hide();
		}
	 });
	 globalcat=cat;
}  
function SRClick(cat){
	 $count=0; 
	 $('#main_panel').html('');
	 globalcat=cat;
	 loadnewbook($count,cat);
}


function search_button(){
	$('#subscribe').show();
	$.ajax({
      		url: 'http://penrose.whitman.edu/newitem/newlist_search.php',
            dataType: 'jsonp',
			type: "GET",
			data: { type: $('#searchformat').val(), query:$('#searchtext').val()},
			jsonp: "callback"
 			}).done(function(bibarrays) {
			$('#answer_panel').html('');
			$.each(bibarrays,function( index,bibarray ) {	
				bibliographicNumber=bibarray.id;
				isbn=bibarray.isbn;
				isbn = typeof isbn !== 'undefined' ? isbn : '000000000';
				title_author=bibarray.title+bibarray.author;
				callno=bibarray.callno;
				publisher=bibarray.publisher;
				receivingdate=bibarray.receivingdate;
				$html='<div class="bookContainer"><div class="book_jacket"><img height="116" src="http://images.btol.com/ContentCafe/Jacket.aspx?UserID=WHTM43002&amp;Password=CC69392&amp;Return=T&amp;Type=S&amp;Value='+isbn+'" /></div><ul class="book_content"><ul class="book_content"><li class="title"><a class="entry_title" href="http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&vid=WHITC&tab=default_tab&mode=Basic&group=GUEST&onCampus=true&displayMode=full&displayField=all&search_scope=whitc_alma&query=any,contains,' + bibliographicNumber + '">' + title_author + '</a></li><li><span class="item_label">Call #:&nbsp;&nbsp;</span>'+callno+'</li><li></li></ul></ul><dl class="accordion">  <dt>&nbsp;</dt><dd style="display: none;"><ul><li><span class="item_label">Publisher:&nbsp;&nbsp;</span>'+publisher+'</li></ul></dd></dl></div>';	
		
			$('#answer_panel').append($html);
			});
	});
}

function search_save(){
	$.ajax({
      		url: 'http://penrose.whitman.edu/newitem/subscribe/signup.php',
            dataType: 'jsonp',
			type: "GET",
			data: { type: $('#searchformat').val(), query:$('#searchtext').val(),name:$('#name_1').val(),email:$('#email').val()},
			jsonp: "callback"
 			}).done(function(bibarrays) {
				$('#answer_panel').prepend(bibarrays.success);
			});
}


$(document).ready(function(e) {
	cats="all";
	loadnewbook(0,cats);
     $( '#wantmore' ).on( 'click', function () { 	 
	 	 cats=globalcat;
		 $count=Number($(this).attr('data-entry'))+30; 
		 loadnewbook($count,cats);
	 });
	 $('#search_tab').click(function(){
		 $('#browse_tab').removeClass('active');
		 $('#search_tab').addClass("active");
		 $('#main_panel').html('<div style="margin-left:10%"><form id="format_search" onsubmit="event.preventDefault();search_button();" style="display: inline;">			 <select style="width:100px" id="searchformat" name="formatbox">								<option selected="selected" value="1">Title</option>								<option value="2">Author</option>								<option value="3">CallNo.</option>														</select>							<input type="text" id="searchtext" size="42">	&nbsp;<a class="flat_button" id="search_button" onclick="search_button()" >Search</a><div style="margin-top:10px; display:none" id="subscribe"><input type="text" name="name" id="name_1" placeholder="Name" />	<input type="text" id="email" name="email" placeholder="Email" /><a class="flat_button" id="search_button" onclick="search_save()" >Subscribe to this Search</a>	</div>	</form></div><div id="answer_panel"></div>');
		 $('#wantmore').hide();
	 });
	 $('#browse_tab').click(function(){
		 $('#search_tab').removeClass('active');
		 $('#browse_tab').addClass("active");
		  $('#main_panel').html('');
		 loadnewbook(0,cats);
	 });

	 
});

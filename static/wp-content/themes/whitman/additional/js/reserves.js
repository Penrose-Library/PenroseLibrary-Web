$(document).ready(function(e) {
	$.ajax({
                            url: '/php/coursereserve.php',
                            type: 'GET',
                            dataType: 'json'
 							}).done(function( msg ) {
								$('#loading').html('<p></p>');
								for(var prop in msg){
								var arr = $.map(msg[prop].instructor, function(el) { return el; });
								sname=' ';						
								if(arr.length==1){
									sname=arr[0].first_name+' '+arr[0].last_name;
								}
								if(arr.length>=2){
									sname=arr[0].first_name+' '+arr[0].last_name+'/'+arr[1].first_name+' '+arr[1].last_name;	
								}
								 var output='<tr><td><a href="http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&vid=WHITC_NEW&tab=default_tab&mode=Basic&group=GUEST&onCampus=true&displayMode=full&displayField=all&search_scope=whitc_cr&query=any,contains,'+msg[prop].code+'">'+msg[prop].code+'</a></td><td>'+sname+'</td></tr>';
							
								$('#tbd-course').append(output);
								}
   							 });

	$("#primoQueryTemp").change(function(){
			$("#primoQuery").val("any,contains," + $("#primoQueryTemp").val());
	})
	$('#search-button').click(function(){
		$('#simple').submit();
	});
});

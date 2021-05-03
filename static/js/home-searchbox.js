
function searchevent() {
	$("#primoQuery").val("any,contains," + $("#primoQueryTemp").val());
		switch($('input:radio[name=search_scope_temp]:checked').val()) {
			 case 'everything':
			  $('#tab_select').val('default_all');
			  $('#scopes').val('primo_central');	
			  $('#primoQueryTemp').attr('placeholder','Search Whitman+Summit+Articles');
			  break;
			  case 'pci':
			  $('#tab_select').val('spec_coll');
		      $('#scopes').val('primo');
			  $('#primoQueryTemp').attr('placeholder','Search Articles');
			  break;
			  case 'summit':
			  $('#tab_select').val('cr_tab');
		      $('#scopes').val('whitc_alma_summit');
			  $('#primoQueryTemp').attr('placeholder','Search Summit and Whitman Library');
			  break;
			  case 'whitman':
			  $('#tab_select').val('default_tab');
			  $('#scopes').val('whitman_lib');
			  $('#primoQueryTemp').attr('placeholder','Search Whitman Library');
			  break;
			  }				
	return true;
}

(function($){
  $(function(){   

	$("#primoQueryTemp").change(function(){
		$("#primoQuery").val("any,contains," + $("#primoQueryTemp").val());
	});
	$('.greet').click(function() {
		 
				switch($('input:radio[name=search_scope_temp]:checked').val())
				{
					  case 'everything':
					 
					  $('#primoQueryTemp').attr('placeholder','Search Whitman+Summit+Articles');
					  break;
					  case 'pci':
					
					  $('#primoQueryTemp').attr('placeholder','Search Articles');
					  break;
					  case 'summit':
							
					  $('#primoQueryTemp').attr('placeholder','Search Summit and Whitman Library');
					  break;
					  case 'whitman':
				
					  $('#primoQueryTemp').attr('placeholder','Search Whitman Library');
					  break;
			}	
				  
		
	
	});
	   
$('#search-button').click(function() {
		searchevent();
	});


})(jQuery); // end of jQuery name space
function searchPrimo() {
	$("#primoQuery").val("any,contains," + 
		$("#primoQueryTemp").val());
		$('#simple').submit();
}

function searchPrimoEvent(event) {
	if (event && event.which == 13) {
		searchPrimo();
	}
	else
		return true;
}

function keywordssync(){
	$("#primoQuery").val("any,contains," + 
		$("#primoQueryTemp").val());
	
}
$(document).ready(function(e) {

    $("#primoQueryTemp").change(function(){
		$("#primoQuery").val("any,contains," + $("#primoQueryTemp").val());
	})
	
	$('#penrose').prop('checked', true);
	
	$('.greet').click(function(event) {
	
		switch($(this).val()) {
			 case 'primo_central':
			  $('#primoQueryTemp').attr('placeholder','Search Whitman+Summit+Articles');
			  break;
			  case 'primo':
			  $('#primoQueryTemp').attr('placeholder','Search Articles');
			  break;
			  case 'whitc_alma_summit':
			  $('#primoQueryTemp').attr('placeholder','Search Summit and Whitman Library');
			  break;
			  case 'whitc_alma':
			  $('#primoQueryTemp').attr('placeholder','Search Whitman Library');
			  break;
		}
	});
});


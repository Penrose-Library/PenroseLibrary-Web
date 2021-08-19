$(document).ready(function(e) {
	var d = new Date();
	var n = d.getUTCMilliseconds(); 
	Math.seedrandom(n);
	var libnum=Math.floor(Math.random()*3+1);
	$('#librarian').val(libnum);
	$('#s-la-askform-submit-21757').click(function(e) {
      $.ajax ({
					url: "https://api2.libanswers.com/1.0/form/submit",
					data: $('#s-la-askform-form_21757').serialize(),
					success: function(d) {
						if (d.status == 1) {
							Materialize.toast(d.message, 4000,"noti")
													} else {
							if (!d.error) { d.error = 'Error'; }
							
						}
					},
					type: 'POST',
					dataType: 'json'
				}).fail(function(){
					Materialize.toast("Error: Please try again", 4000,"noti")

				});	
			});
	   


});

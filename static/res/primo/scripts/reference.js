		
				$.ajax({
						url: "http://penrose.whitman.edu/calendar/reference.php",
						cache: yes,
						dataType: 'json'
				})
				.done(function( hours ) {
					 if(typeof hours[0] === 'undefined'){
						 $('#date_hours').html('Regular office hours during the semester are Monday-Friday, 8:00am-noon and 1pm-5pm. For immediate assistance, call 509-527-5192');
					 }else{
						$('#date_hours').html("<div><p><span style=' font-weight: bold;font-size: 13px; line-height: 16px; color: green'>"+hours[0].notes.name+"</span> in office "+hours[0].notes.office+" untill "+hours[0].dtend+"</p><p><a href='mailto:"+hours[0].notes.email+"'>"+hours[0].notes.email+"</a><br/>"+hours[0].notes.phone+"</p>");
					 }
				});

						
				
		

(function($){

  $(function(){   
	var $availcomp=0;
	//bike
	$.ajax({
           url: 'https://penroselib-php.herokuapp.com/bike.php',
           type: 'GET',
           dataType: 'json',
	       cache:false,
 	}).done(function( msg ) {
		var output=(msg.Total-msg.CheckedOut)+" available.";
		$('#bikeshare').html(output);
	 });

	//study room
	 $.ajax({
           url: 'https://penroselib-php.herokuapp.com/studyroom.php',
           type: 'GET',
           dataType: 'json',
		   cache:true
 	}).done(function( msg ) {
	var output=(msg.Total-msg.CheckedOut) + ' available.';
	$('#studyroom').html(output);
	});
	
	//SenSource
	$.ajax({
           url: 'https://library.whitman.edu/cfworker/spacecount',
           type: 'GET',
		   dataType: 'json'
 	}).done(function( msg ) {
	var output= (msg) + ' people.';
	$('#buildingoccupancy').html(output);
	});
	
	//library hours
var today = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric' };
$('#date').html(today.toLocaleDateString('en-US', options));

$.ajax({
    url: "https://library.whitman.edu/cfworker/calendar?calendar=whitman.edu_49tmb5t3aoa3k0t05vmp58cfeo@group.calendar.google.com",
    cache: true,
    dataType: 'json'
})
.done(function(openingtime) { 
    let summaryText = openingtime.items[openingtime.items.length - 1]['summary'];
    
    // Replace semicolon with a line break
    summaryText = summaryText.replace(';', '</br>');
    
    // Create the HTML with the line break
    $('#today').html(
        '<a href="https://www.google.com/calendar/embed?src=whitman.edu_49tmb5t3aoa3k0t05vmp58cfeo%40group.calendar.google.com&ctz=America/Los_Angeles" rel="noreferrer" target="_blank">' + 
        summaryText + 
        '</a>'
    );
})

var librarian = { 
    Emily: { "name": "Emily Pearson", "office":"215","email":"pearsome@whitman.edu", "phone": "509-527-5918", "photo":"https://library.whitman.edu/images/librarians/EMILY-PEARSON_2019.png"  }, 
    Julie: { "name": "Julie Carter", "office":"219","email":"carterja@whitman.edu", "phone": "509-527-5915", "photo":"https://library.whitman.edu/images/librarians/JULIE-CARTER_2019.png"  }, 
    Bridget: { "name": "Bridget Scoles", "office": "222","email":"scolesb@whitman.edu", "phone": "509-527-5917", "photo":"https://library.whitman.edu/uploads/2024-bridget-s.jpg"},
    Amy: {"name": "Amy Blau","office":"217","email":"blauar@whitman.edu","phone": "509-527-4905", "photo":"https://library.whitman.edu/images/librarians/AMY-BLAU_2019.png" } 
}
//reference calendar
	$.ajax({
			url: "https://library.whitman.edu/cfworker/calendar",
			dataType: 'json'
	}).done(function( hours ) {
	    refhtml='<p>If you need help, please send us an email.</p>';
		console.log(hours.items.length);
		x=hours.items.length-1;
		if(hours.items[x] && x >= 0){
		const now = new Date();
        const start = new Date(hours.items[x].start.dateTime); 
        const end = new Date(hours.items[x].end.dateTime); 
       if(now.getHours()<=end.getHours()&&now.getHours()>=start.getHours()){
				refhtml='<div class="reference-text"><span style="color:green">'+librarian[hours.items[x].summary].name+'</span> is available for research help until '+end.toLocaleTimeString('en-US', {  hour: '2-digit', minute: '2-digit' })+'. <a href="mailto:'+librarian[hours.items[x].summary].email+'">'+librarian[hours.items[x].summary].email+'</a></div>  <div class="reference-picture">   <img src="'+librarian[hours.items[x].summary].photo+'" alt="'+librarian[hours.items[x].summary].name+'"/></div>';
       }
	  }
	$('#reference').html(refhtml);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

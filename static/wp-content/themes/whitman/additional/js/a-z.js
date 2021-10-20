$(document).ready(function(e) {
$( "#search" ).load( "/php/az.php", function( response, status, xhr ) {
  if ( status == "success" ) {
   var options = {
  valueNames: [ 'name', 'description' ]
};

var userList = new List('mainaz', options);
  }
});
$('#guides').change(function(e) {
	window.location.href = "/php/guides.php?url="+$('#guides').val();
});
});

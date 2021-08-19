(function($) {
    "use strict"; 
    $(function() {		
		// mobile nav
		$('#mobile-menu').click(function() {
		  $('#sidebar nav').slideToggle();
		});
		widgetPosition();
		function widgetPosition() {
			var winWidth = $(document).width();
			if (winWidth < 991) {
				$('#widgets').prependTo('footer');
				$('#widgets').addClass('reposition');		
			}
			if (winWidth > 991) {
				if($('#widgets').hasClass('reposition')) {
					$('#widgets').appendTo('#sidebar');
				}
			}	
		}
		$(window).resize(function() {
			widgetPosition();
		});	
 	}); 
}(jQuery));
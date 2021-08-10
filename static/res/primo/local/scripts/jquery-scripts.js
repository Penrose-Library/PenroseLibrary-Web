$(document).ready(function(){
	// Allows all links with these tags to open in a blank window
	$("a[rel='external'], a[title='external']").click(function(){
		window.open(this.href);
		return false;
	});
	 
	//quick links
	$('#qlink-bttn').click(function() {
		$('#qlinks').slideToggle(300);
		return false;
	});	
	
	 // Allows a print icon or link to print
	$(".print").click(function(){
		window.print();
		return false;
	});
	
	// Clears or unclears the default value of an input field
	$(".clearFocus").focus(function(){
		if($(this).val()==$(this).attr("title")) {
			$(this).val("");
		}
	}).blur(function(){
		if ($(this).val()=="") {
			$(this).val($(this).attr("title"));
		}		 
	});	
	
	// Enables tabs on the home page and any other area they're placed
	$('.tabNav a').click(function(){
		// Turns off the previous active tab
		$('.tab').hide();
		$('.tabNav a').removeClass('active');
		// Turns on the new active active
		$('.tab#' + $(this).attr("href")).show();
		$(this).addClass('active');
		return false;
	});
});


function populateCalendar(dates, eventlistURL) {
	var date = new Date();
	var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
	var _eventlistURL = eventlistURL
	var enabledDays = dates;
	function enableAllTheseDays(date) {
		//date is in the format yyyy-mm-dd
		var dateStr = date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
		for (i = 0; i < enabledDays.length; i++) {
			if ($.inArray(dateStr, enabledDays) != - 1) {
				return[ true];
			}
		}
		
		function pad(number) {
			if (number < 10 && number >= 0)
			return "0" + number;
			return number;
		}
		return[ false];
	}
	
	function pad(number) {
		if (number < 10 && number >= 0)
		return "0" + number;
		return number;
	}
	// Allows the datepicker to function and allow changes to the main frame via AJAX if a date or month is selected
	$('#datepicker').datepicker({
		dateFormat: 'yy-mm-dd',
		beforeShowDay: enableAllTheseDays,
		onChangeMonthYear: function (year, month, inst) {
			month = pad(month);
			$("#mod-events").html("<p class='calendar-top'></p>");
			$.get(_eventlistURL, {
				type: "month", date: year + "-" + month + "-01", category: $("#selectCategory").val()
			},
			function (data) {
				$("#mod-events").html(data);
			});
		},
		onSelect: function (dateText, inst) {
			$("#mod-events").html("<p class='calendar-top'></p>");
			$.get(_eventlistURL, {
				type: "day", date: dateText, category: $("#selectCategory").val()
			},
			function (data) {
				$("#mod-events").html(data);
			});
		}
	});
	
	// Reloads the main frame via AJAX if a category is selected
	$("#selectCategory").live('change', function () {
		/*$("#mod-events").html("<p class='calendar-top'></p>");
		$.get(_eventlistURL, {
			type: "none", category: $(this).attr("value"), catname: $(this).find("option:selected").text()
		},
		function (data) {
			$("#mod-events").html(data);
		});
		return false;*/
		window.location.href = window.location.href.replace(window.location.search, "") + "?category=" + $("#selectCategory").val();
	});
}
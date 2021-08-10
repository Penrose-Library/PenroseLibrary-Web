function getChromeVersion () {
	var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	return raw ? parseInt(raw[2], 10) : false;
}

function remove_listeners(class_name) {
	var elements = document.getElementsByClassName("EXLResultTab");
	for (var i = 0; i < elements.length; i++)
	{
	    old_element = elements.item(i);
	    new_element = old_element.cloneNode(true);
	    old_element.parentNode.replaceChild(new_element, old_element);
	};
}

$(document).ready(function(e) {
    $('#exlidMyAccountMainContainer1').before('<div><h2>Students: Please check your library fines in your student account.</h2></div>');
	console.log('updated 4/13');
//temp solution	

if (getChromeVersion() === 57) {
  remove_listeners("EXLResultTab");
}

	
});
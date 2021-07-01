---
date: "2021-07-01"
title: "Course Reserves"
---

<form enctype="application/x-www-form-urlencoded; charset=utf-8" action="http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do" target="_self" method="get" name="searchForm" class="formtab1" id="simple"><input type="hidden" value="WHITC" name="institution">
<input type="hidden" value="WHITC" name="vid">
<input type="hidden" value="cr_tab" name="tab">
<input type="hidden" name="search_scope" value="whitc_cr">
<input type="hidden" value="Basic" name="mode">

<input type="hidden" value="GUEST" name="group">
<input type="hidden" value="true" name="onCampus">
<input type="hidden" value="full" name="displayMode">
<input type="hidden" name="query" id="primoQuery">
<input type="hidden" value="true" name="highlight">
<input type="hidden" value="all" name="displayField">
<div style="margin-left:auto;margin-right:auto">

Enter course number, instructor's name, or choose from list below.
<div class="mdi-action-search black-text icon323"></div>
<input type="text" placeholder="Search Course Reserves;" value="" id="primoQueryTemp" class="form-control">
<button class="btn white-text waves-effect waves-light" id="search-button" style="display:inline">Search</button>

</div>
</form>
<div style="margin-left:auto;margin-right:auto;clear:both">
<h5>List of Courses</h5>
<ul id="class" class="collection"></ul>
<table class="responsive-table">
<thead>
<tr>
<th data-field="id">Course</th>
<th data-field="name">Instructor</th>
</tr>
</thead>
<tbody id="tbd-course"></tbody>
</table>
<div id="loading" style="width:30%;margin-left:auto;margin-right:auto">
<div class="preloader-wrapper big active">
<div class="spinner-layer spinner-blue-only">
<div class="circle-clipper left">
<div class="circle "></div>
</div>
</div>
</div>
</div>
</div>
<script>
$(document).ready(function(e) {
	$.ajax({
                            url: 'https://library.whitman.edu/php/coursereserve.php',
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
</script>
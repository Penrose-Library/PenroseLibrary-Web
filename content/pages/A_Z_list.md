---
title: Database A-Z
date: 2021-06-21T21:58:53.672Z
---

<script async src="//lgapi-us.libapps.com//web/js/sa.js" ></script><script>springshare_widget_config_1622747636763 = { path: 'assets' };</script>
<form method="GET" target="_self">
<label for="a-z" style="width:100%;">Search for database</label>
<input id="a-z_term" name="q" type="text" value="" placeholder=" " class="form-control no-up-margin" style="width:15rem; background: #fff;float:left;">
<button id="azbutton" class="btn no-up-margin" type="submit" value="Search">Search</button>
<select id="s-lg-sel-subjects" name="subjects" style="max-width:20rem;margin-top:1rem" class="form-control"  aria-controls="s-lg-widget-1622747636763" aria-label="Select a Subject Area to narrow down list of databases" data-placeholder="All Subjects" onchange="this.form.submit()">
<option value selected>All Subjects</option>
<option value="17555">Anthropology </option>
<option value="17587">Archives </option>
<option value="17557">Art </option>
<option value="17558">Art History &amp; Visual Culture Studies </option>
<option value="17559">Asian Studies </option>
<option value="17560">Astronomy </option>
<option value="17561">Biological Sciences </option>
<option value="17562">Chemistry </option>
<option value="17563">Classics</option>
<option value="17564">Economics </option>
<option value="17565">English </option>
<option value="17566">Environmental Studies </option>
<option value="17567">Film &amp; Media Studies </option>
<option value="17589">Foreign Languages and Literatures</option>
<option value="17568">French </option>
<option value="17569">Gender Studies </option>
<option value="17585">General Studies </option>
<option value="17570">Geology </option>
<option value="17571">German </option>
<option value="17572">History</option>
<option value="17591">Information for Seniors</option>
<option value="17586">Library</option>
<option value="17573">Mathematics</option>
<option value="17574">Music</option>
<option value="17575">Philosophy</option>
<option value="17576">Physics</option>
<option value="17577">Politics</option>
<option value="17578">Psychology</option>
<option value="17579">Race and Ethnic Studies</option>
<option value="17580">Religion</option>
<option value="17588">Research</option>
<option value="17581">Rhetoric, Writing, and Public Discourse</option>
<option value="17582">Sociology </option>
<option value="17583">Hispanic Studies</option>
<option value="17584">Theatre &amp; Dance </option>
</select>
</form>
<div id="s-lg-widget-1622747636763" role="region" aria-live="polite"></div>


<script async id="s-lg-widget-script-1622747636763"></script>

<script>

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var query = getParameterByName('q'); 
var subjectid = getParameterByName('subjects'); 
console.log(query);
var lgwidget = document.getElementById('s-lg-widget-script-1622747636763');
if (query||subjectid){
    $('#a-z_term').val(query);
    if(subjectid!=""){
   document.getElementById('s-lg-widget-script-1622747636763').setAttribute('src', 'https://lgapi-us.libapps.com/widgets.php?site_id=689&widget_type=2&search_match=2&subject_ids%5B0%5D='+subjectid+'&sort_by=name&list_format=1&drop_text=Select+a+Database...&output_format=1&load_type=2&enable_description=1&widget_title=A-Z+Database+List&widget_height=250&widget_width=100%25&widget_link_color=2954d1&widget_embed_type=1&num_results=0&enable_more_results=0&window_target=2&config_id=1622747636763&search_terms=' +query);
   $('#s-lg-sel-subjects option[value="'+subjectid+'"]').attr("selected","selected");
    }else{
           document.getElementById('s-lg-widget-script-1622747636763').setAttribute('src', 'https://lgapi-us.libapps.com/widgets.php?site_id=689&widget_type=2&search_match=2&sort_by=name&list_format=1&drop_text=Select+a+Database...&output_format=1&load_type=2&enable_description=1&widget_title=A-Z+Database+List&widget_height=250&widget_width=100%25&widget_link_color=2954d1&widget_embed_type=1&num_results=0&enable_more_results=0&window_target=2&config_id=1622747636763&search_terms=' +query);
    }
}else{
    document.getElementById('s-lg-widget-script-1622747636763').setAttribute('src', 'https://lgapi-us.libapps.com/widgets.php?site_id=689&widget_type=2&search_match=2&subject_ids=&sort_by=name&list_format=1&drop_text=Select+a+Database...&output_format=1&load_type=2&enable_description=1&widget_title=A-Z+Database+List&widget_height=250&widget_width=100%25&widget_link_color=2954d1&widget_embed_type=1&num_results=0&enable_more_results=0&window_target=2&config_id=1622747636763&search_terms=');
}
    

</script>
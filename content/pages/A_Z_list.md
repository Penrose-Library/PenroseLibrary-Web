---
title: Database A-Z
date: 2021-06-21T21:58:53.672Z
---

<script async src="//lgapi-us.libapps.com//web/js/sa.js" ></script><script>springshare_widget_config_1622747636763 = { path: 'assets' };</script>
<form method="GET" target="_self">
<label for="a-z" style="width:100%;">Search for database</label>
<input id="a-z_term" name="q" type="text" value="" placeholder=" " class="form-control no-up-margin" style="width:15rem; background: #fff;float:left;">
<button id="azbutton" class="btn no-up-margin" type="submit" value="Search">Search</button>
</form>
<div id="s-lg-widget-1622747636763"></div>

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
console.log(query);
var lgwidget = document.getElementById('s-lg-widget-script-1622747636763');
if (query){
   document.getElementById('s-lg-widget-script-1622747636763').setAttribute('src', 'https://lgapi-us.libapps.com/widgets.php?site_id=689&widget_type=2&search_match=2&subject_ids=&sort_by=name&list_format=1&drop_text=Select+a+Database...&output_format=1&load_type=2&enable_description=1&widget_title=A-Z+Database+List&widget_height=250&widget_width=100%25&widget_link_color=2954d1&widget_embed_type=1&num_results=0&enable_more_results=0&window_target=2&config_id=1622747636763&search_terms=' +query);
}else{
    document.getElementById('s-lg-widget-script-1622747636763').setAttribute('src', 'https://lgapi-us.libapps.com/widgets.php?site_id=689&widget_type=2&search_match=2&subject_ids=&sort_by=name&list_format=1&drop_text=Select+a+Database...&output_format=1&load_type=2&enable_description=1&widget_title=A-Z+Database+List&widget_height=250&widget_width=100%25&widget_link_color=2954d1&widget_embed_type=1&num_results=0&enable_more_results=0&window_target=2&config_id=1622747636763&search_terms=');
}
    

</script>
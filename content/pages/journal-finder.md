---
date: "2019-04-09"
title: "Journal Finder"
toc: false
---


## Find a Journal by title


[e-Journal A-Z List](https://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&amp;vid=WHITC_NEW&amp;query=facet_atoz%2cexact%2cA&amp;indx=1&amp;bulkSize=30&amp;dym=false&amp;loc=local%2cscope%3a%28AZWHITC%29&amp;fn=goAlmaAz&amp;sortField=stitle&amp;almaAzSearch=true&amp;azSearch=true&amp;selectedAzAlmaLetter=A)


<form id="primoJournalsForm" name="primoJournalsForm" method="get" target="_self" action="" enctype="application/x-www-form-urlencoded; charset=utf-8" onsubmit="return false;searchPrimoJournals();" class="row">
<div class="input-field col l2">
<select class="titleselect" id="jsearchtype">
<option value="contains">Contains</option>
<option value="exact">Exact phrase</option>
<option value="begins_with">Begins with</option>
</select></div>
<div class="input-field col l10">

<input id="primoQueryTemp_j" name="vl(freeText0)" type="text" value="" placeholder=" ">
<label for="PrimoQueryTemp_j">Journal title</label>

</div>
<button id="jformbutton" class="btn" type="botton" value="Search" onclick="searchPrimoJournals()">Search</button>
<label style="margin-left:1rem">Omit initial articles such as "the," "a," "le"... </label>
</form>


## Find an Article by Title

<form id="primoArticlesForm" name="primoArticles" method="get" target="_self" action="//sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?" enctype="application/x-www-form-urlencoded; charset=utf-8" onsubmit="searchPrimoArticles()" class="row">
<div class="input-field col l12">
<label for="qtemp">Article title</label>
<input type="hidden" value="WHITC" name="institution">
<input type="hidden" value="WHITC_NEW" name="vid">
<input type="hidden" value="spec_coll" name="tab">
<input type="hidden" name="search_scope" value="primo">
<input type="hidden" name="mode" value="Basic">
<input type="hidden" name="onCampus" value="true">
<input type="hidden" name="displayMode" value="full">
<input type="hidden" name="highlight" value="true">
<input type="hidden" name="query" id="primoQuery">
<input name="qtemp" id="primoQueryTemp1" type="text" value="" placeholder=" ">
<input type="hidden" name="displayField" value="all">
<input type="hidden" name="bulkSize" value="20"></div>
<button id="aformbutton" class="btn" style="clear:both" type="submit" value="Search" onclick="searchPrimoArticles()">Search</button>
</form>


## Find an Article by Citation


<form enctype="application/x-www-form-urlencoded; charset=utf-8" target="_blank" id="citationLinkerForm1" method="get" action="//sherlock.whitman.edu/primo-explore/openurl" class="row">
<input type="hidden" value="Z39.88-2004" id="ctx_ver" name="ctx_ver">
<input type="hidden" value="WHITC_NEW" id="vid" name="vid">
<input type="hidden" value="WHITC" id="institution" name="institution">
<input type="hidden" value="article" id="rft.genre" name="rft.genre">
<input type="hidden" value="info:ofi/enc:UTF-8" id="ctx_enc" name="ctx_enc">
<input type="hidden" value="Z39.88-2004" id="url_ver" name="url_ver">
<input type="hidden" value="infofi/fmt:kev:mtx:ctx" id="url_ctx_fmt" name="url_ctx_fmt">
<input type="hidden" value="info:sid/primo.exlibrisgroup.com:primo4-article-cLinker" id="rfr_id" name="rfr_id">
<input type="hidden" value="info:ofi/fmt:kev:mtx:article" id="rft_val_fmt" name="rft_val_fmt">
<input type="hidden" value="true" id="isCitationLinker" name="isCitationLinker">
<div class="input-field col l12">
<label for="rft.atitle">Article Title:</label>
<input type="text" id="rft.atitle" value="" placeholder=" " name="rft.atitle"></div>
<div class="input-field col l12">
<label for="rft.jtitle">Journal title</label>
<input name="rft.jtitle" type="text" value="" placeholder=" "></div>
<div class="input-field col l6">
<label for="rft.aulast">Author Last Name:</label>
<input type="text" id="rft.aulast" value="" name="rft.aulast" placeholder=" "></div>
<div class="input-field col l6">
<label for="rft.aulast">Author First Name:</label>
<input type="text" id="rft.aufirst" value="" name="rft.aulast" placeholder=" "></div>
<div class="input-field col l4">
<label for="rft.date">Date (YYYY-MM-DD):</label>
<input id="rft.date" type="text" class="datepicker" value="" name="rft.date" placeholder=" "></div>
<div class="input-field col l4">
<label for="rft.volume">Volume</label>
<input class="inputfloatinline" name="rft.volume" value="" type="text" placeholder=" "></div>
<div class="input-field col l4">
<label for="rft.issue">Issue</label>
<input id="issue" class="inputfloatinline" name="rft.issue" value="" type="text" placeholder=" "></div>
<div class="input-field col l4">
<label for="rft.spage">Start page</label>
<input id="page" class="inputfloatinline" name="rft.spage" value="" type="text" placeholder=" "></div>
<div class="input-field col l4">
<label for="rft.issn">ISSN</label>
<input name="rft.issn" value="" type="text" placeholder=" "></div>
<div class="input-field col l4">
<label for="rft.pmid">PMID</label>
<input type="text" name="rft.pmid" size="20" value="" placeholder=" "></div>
<div class="input-field col l4">
<label for="doi_value">DOI</label>
<input type="text" name="rft.doi" size="20" value="" placeholder=" "></div>
<button class="btn" id="sfxbutton" type="submit" value="Search">Search</button>

</form>

<script type="text/javascript">
  $(document).ready(function() {
    $('select').material_select();
	  $('.datepicker').pickadate({
  	  selectMonths: true, // Creates a dropdown to control month
  	  selectYears: 500, // Creates a dropdown of 15 years to control year
	  format: 'yyyy-mm-dd'
  	});
  });
		/* identify journal search type from select box and construct deep link for title search */
		function searchPrimoJournals() {
			var jsearchtype = document.getElementById('jsearchtype');
			var jsearchtypeSelection = jsearchtype.options[jsearchtype.selectedIndex].value;
			var searchquery = "title," + jsearchtypeSelection + "," + document.getElementById("primoQueryTemp_j").value.replace(/[,]/g," ");
			/* if type is begins-with, sort results by title */
			if (jsearchtypeSelection === 'begins_with') {
				jsortFields =  "title";
			} else {
				jsortFields = "rank";
			}
			//window.location="https://sherlock.whitman.edu/primo_library/libweb/action/search.do?ct=facet&rfnGrpCounter=2&fn=search&indx=1&dscnt=0&vl(1UIStartWith0)=contains&mode=Basic&vid=WHITC_NEW&highlight=true&institution=WHITC&tab=default_tab&sortField="+jsortFields+"&rfnGrpCounter=1&query=facet_pfilter,exact,journals&query=facet_pfilter,exact,Newspapers&query="+searchquery+"&displayMode=full&onCampus=true&ct=search&bulkSize=20&srt="+jsortFields+"&displayField=all&vl(freeText0)="+document.getElementById("primoQueryTemp_j").value.replace(/[,]/g," ")+"&fctIncV=newspapers&mulIncFctN=facet_rtype&rfnIncGrp=2&fctIncV=journals&mulIncFctN=facet_rtype&rfnIncGrp=2"
window.location="https://sherlock.whitman.edu/primo-explore/search?query="+searchquery+"&tab=default_tab&search_scope=whitman_lib&sortby=rank&vid=WHITC_NEW&facet=rtype,include,journals&lang=en_US&offset=0"
		}
		function searchPrimoArticles() {
			document.getElementById("primoQuery").value = "title,contains," + document.getElementById("primoQueryTemp1").value.replace(/[,]/g," ");
			document.forms["primoArticles"].submit();
		}
</script>
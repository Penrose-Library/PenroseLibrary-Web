---
date: "2017-06-26T18:27:58+01:00"
title: "Penrose Library"
---


<form id="simple" class="formtab1" action="https://sherlock.whitman.edu/primo-explore/search" enctype="application/x-www-form-urlencoded; charset=utf-8" method="get" name="searchForm" onsubmit="searchevent();"><!-- Customizable Parameters -->
    <input name="institution" type="hidden" value="WHITC" />
    <input name="vid" type="hidden" value="WHITC_NEW" />
    <input id="tab_select" name="tab" type="hidden" />
    <input id="scopes" name="search_scope" type="hidden" />
    <input name="mode" type="hidden" value="Basic" />
    <!-- Fixed parameters -->
    <input name="onCampus" type="hidden" value="true" />
    <input name="displayMode" type="hidden" value="full" />
    <input id="primoQuery" name="query" type="hidden" />
    <input name="pcAvailabiltyMode" type="hidden" value="true" />
    <input name="highlight" type="hidden" value="true" />
    <input name="displayField" type="hidden" value="all" />
    <input name="bulkSize" type="hidden" value="40" />
<div class="searchquery"><span class="material-icons flow-text white-text">search</span>
    <input id="primoQueryTemp" name="queryTemp" type="text" value="" placeholder="Search Whitman Library" aria-label="Enter Search Query to search Sherlock, the Penrose Library Catalog" />
    <button id="Search-button">Search</button>
</div>
<!-- end of searchquery -->

<!-- Search Button -->
<div id="radioscope" role="radiogroup" aria-label="Search Scope">
<label>
    <input id="penrose" checked="checked" name="search_scope_temp" type="radio" value="whitman" aria-describedby="penrose-tooltip" />
    <span id="penrose-tooltip" class="js-simple-tooltip" data-simpletooltip-text="Print and e-books, journals and e-journals, special collections, and audiovisual materials owned by Penrose Library.">Whitman</span>
</label>
<label>
    <input id="summit" name="search_scope_temp" type="radio" value="summit" aria-describedby="summit-tooltip" />
    <span id="summit-tooltip" class="js-simple-tooltip" data-simpletooltip-text="Books and audiovisual materials held by other academic libraries in the Pacific Northwest (delivery about five days from request)">Summit</span>
</label>
<label>
    <input id="article"  name="search_scope_temp" type="radio" value="pci" aria-describedby="article-tooltip"  />
    <span id="article-tooltip" class="js-simple-tooltip" data-simpletooltip-text="Scholarly articles and other content from many of Whitman's databases in all disciplines.">Articles</span>
</label>
<label>
    <input id="everything" name="search_scope_temp" type="radio" value="everything" aria-describedby="everything-tooltip" />
    <span id="everything-tooltip" class="js-simple-tooltip" data-simpletooltip-text="Combine Whitman + Summit + Articles in one blended search.">Everything</span>
</label></div>

</form>
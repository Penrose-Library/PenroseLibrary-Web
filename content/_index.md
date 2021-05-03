---
date: 2017-06-26T18:27:58+01:00
title: Penrose Library
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
<div class="searchquery"><span class="material-icons flow-text white-text">search</span>
<input id="primoQueryTemp" name="queryTemp" type="text" value="" placeholder="Search Whitman Library" aria-label="Enter Search Query to search Sherlock, the Penrose Library Catalog" />
<button id="Search-button" class="btn white-text waves-effect waves-light" style="z-index: 100;">Search</button></div>
<!-- end of searchquery -->
<input name="highlight" type="hidden" value="true" />
<input name="displayField" type="hidden" value="all" />
<input name="bulkSize" type="hidden" value="20" />
<!-- Search Button -->
<div id="radioscope"><label>
<input id="penrose" class="with-gap greet" checked="checked" name="search_scope_temp" type="radio" value="whitman" />
<span class="white-text greet" data-position="bottom" data-tooltip="Print and e-books, journals and e-journals, special collections, and audiovisual materials owned by Penrose Library.">Whitman</span>
</label>
<label>
<input id="summit" class="with-gap greet" name="search_scope_temp" type="radio" value="summit" />
<span class="white-text greet" data-tooltip="Books and audiovisual materials held by other academic libraries in the Pacific Northwest (delivery about five days from request)">Summit</span>
</label>
<label>
<input id="article" class="with-gap greet" name="search_scope_temp" type="radio" value="pci" />
<span class="white-text greet" data-tooltip="Scholarly articles and other content from many of Whitman's databases in all disciplines.">Articles</span>
</label>
<label>
<input id="everything" class="with-gap greet" name="search_scope_temp" type="radio" value="everything" />
<span class="white-text greet" data-tooltip="Combine Whitman + Summit + Articles in one blended search.">Everything</span>
</label></div>

</form>
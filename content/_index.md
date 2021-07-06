---
date: "2017-06-26T18:27:58+01:00"
title: ""
toc: false
---

<div class="searchbox">
<form id="simple" class="form-group no-up-margin nobackground" action="https://sherlock.whitman.edu/primo-explore/search" enctype="application/x-www-form-urlencoded; charset=utf-8" method="get" name="searchForm" onsubmit="searchevent();"><!-- Customizable Parameters -->
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
<div class="searchquery">
    <img src="images/sherlock.svg" alt="Sherlock Discovery service logo" style="width:15em;margin:0 0em 0.5em 0em" class="nobackground" />
    <input id="primoQueryTemp" name="queryTemp" type="text" value="" placeholder="Search Whitman Library" aria-label="Enter Search Query to search Sherlock, the Penrose Library Catalog" class="form-control no-up-margin" style="width:80%; float:left; background: #fff" />
    <button id="Search-button" class="btn no-up-margin" style="float:right">Search</button>
</div>
<!-- end of searchquery -->

<!-- Search Button -->
<fieldset id="radioscope" role="radiogroup" aria-label="Search Scope" style="margin-top:0" class="nobackground">
    <label style="margin-top:1em">
        <input id="penrose" class="form-check-input" checked="checked" name="search_scope_temp" type="radio" value="whitman" aria-describedby="penrose-tooltip" />
        <span id="penrose-tooltip" class="js-simple-tooltip form-check-label" data-simpletooltip-text="Print and e-books, journals and e-journals, special collections, and audiovisual materials owned by Penrose Library.">Whitman</span>
    </label>
    <label style="margin-top:1em">
        <input id="summit" class="form-check-input" name="search_scope_temp" type="radio" value="summit" aria-describedby="summit-tooltip" />
        <span id="summit-tooltip" class="js-simple-tooltip form-check-label" data-simpletooltip-text="Books and audiovisual materials held by other academic libraries in the Pacific Northwest (delivery about five days from request)">Summit</span>
    </label>
    <label style="margin-top:1em">
        <input id="article" class="form-check-input" name="search_scope_temp" type="radio" value="pci" aria-describedby="article-tooltip"  />
        <span id="article-tooltip" class="js-simple-tooltip form-check-label" data-simpletooltip-text="Scholarly articles and other content from many of Whitman's databases in all disciplines.">Articles</span>
    </label>
    <label style="margin-top:1em">
        <input id="everything" class="form-check-input" name="search_scope_temp" type="radio" value="everything" aria-describedby="everything-tooltip" />
        <span id="everything-tooltip" class="js-simple-tooltip form-check-label" data-simpletooltip-text="Combine Whitman + Summit + Articles in one blended search.">Everything</span>
    </label>
</fieldset>

</form>
</div>
<div id="announcement">{{% announcement file="announcement.md" %}}</div>

<div class="grid-container">
  <div class="Area-1 box">
        <span id="date">&nbsp;</span>
        <p id="today">&nbsp;</p>
        <p class="t">Circulation: 509-527-5192 &nbsp; library@whitman.edu</p>
        <a href="#">Research Help:</a>
        <p id="libchat_776a12eb7834f00b1664afc3f902f086" style="margin-top:1em"></p>
        <a class="waves-effect waves-light btn" href="/contact-a-librarian/" target="_blank" rel="noopener noreferrer">Ask Librarian via Email</a>
</div>
<div class="Area-2 box" style="padding:0">{{< lastblog >}}</div>
<div class="Area-3 box">
    <p>Study Rooms</p>
    <span id="studyroom" class="no-up-margin">&nbsp;</span>
    <p>Bike Shares</p>
    <span id="bikeshare" class="no-up-margin">&nbsp;</span>
    <p>Building Occupancy</p>
    <span id="buildingoccupancy" class="no-up-margin">&nbsp;</span> 
    <ul class="underline_li">
        <li><a id="mapclick" href="#mapt">Building Map</a></li>
        <li><a href="https://sherlock.whitman.edu/primo-explore/account?vid=WHITC_NEW&amp;lang=en_US&amp;section=overview">My Library Account</a></li>
        <li><a href="https://whitman.illiad.oclc.org/illiad/logon.html">InterLibrary Loan</a></li>
        <li><a href="/faculty-services/#reserve">Request course reserves</a></li>
        <li><a title="Our Librarians are available to assist you with research topics, projects, and papers Monday through Friday from 8am to 5pm. Drop-in visits are welcome too!" href="/appointments/">Schedule a Research Appointment</a></li>
    </ul>
</div>
<div class="Area-4 box">BOX 4 Area</div>
<div class="Area-5 box" id="newitem" style="padding:0"></div>
<div class="Area-6 box">BOX 6 Area</div>
</div>

<script src="/js/init-home.js"></script>
---
date: "2017-06-26T18:27:58+01:00"
title: ""
toc: false
---
<div class="top-section-main">
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
</div>
<div class="second-section-main">
<div class="bootstrap-wrapper">
<div class="container-fluid">
<div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div class="card">
        <h3>Hours and Contact</h3>
        <span id="date">&nbsp;</span>
        <p id="today">&nbsp;</p>
        <p class="t">Circulation: 509-527-5192 &nbsp; library@whitman.edu</p>
        <p>Research Help:</p>
        <div id="libchat_776a12eb7834f00b1664afc3f902f086"></div>
        <a class="waves-effect waves-light btn" href="/contact-a-librarian/" target="_blank" rel="noopener noreferrer">Ask Librarian via Email</a>
        <div id="reference"></div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"><div class="card" style="padding:0">{{< lastblog >}}</div></div>
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="card">
            <h3>Building Info</h3>
            <p class="no-up-margin">Study Rooms: 
            <span id="studyroom" class="no-up-margin">&nbsp;</span><br/>
            Bike Shares: 
            <span id="bikeshare" class="no-up-margin">&nbsp;</span><br/>
            Building Occupancy: 
            <span id="buildingoccupancy" class="no-up-margin">&nbsp;</span> </p>
            <hr/>
            <div class="pull-left home-link">
            <p><a href="/map">Building Map</a>
                <p><a href="https://sherlock.whitman.edu/primo-explore/account?vid=WHITC_NEW&amp;lang=en_US&amp;section=overview">My Library Account</a></p>
                <p><a href="https://whitman.illiad.oclc.org/illiad/logon.html">InterLibrary Loan</a></p>
            </div>
            <div class="pull-right home-link">
                <p><a href="faculty_services/#course-reserves">Request course reserves</a></p>
                <p><a title="Our Librarians are available to assist you with research topics, projects, and papers Monday through Friday from 9am to 5pm. Drop-in visits are welcome too!" href="https://whitman.libcal.com/appointments">Schedule a Research Appointment</a></p>
                <p><a href="newbook/">Recently acquired books</a></p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
<script src="/js/init-home.js"></script>
<script src="https://asklibrarian.whitman.edu/load_chat.php?hash=776a12eb7834f00b1664afc3f902f086"></script>
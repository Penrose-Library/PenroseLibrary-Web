---
date: "2021-07-06"
title: "Contact a Librarian"
---

<script type="text/javascript">
$(document).ready(function(e) {
    $('#s-la-askform-submit-21757').click(function(e) {
        $('div.preloader-wrapper').show();
        $.ajax({
            url: "https://api2.libanswers.com/1.0/form/submit",
            data: $('#s-la-askform-form_21757').serialize(),
            beforeSend : function (){
                $('#s-la-askform-form_21757').hide();
                $('div#result').addClass('site-error');
                $('div#result').html('<p>Submitting....</p>');
            },
            success: function(d) {
                $('div#result').addClass('site-error');
                $('div#result').html('<p>' + d.message + '</p>');
            },
            type: 'POST',
            dataType: 'json'
        }).fail(function() {
            $('#s-la-askform-form_21757').show();
            $('div#result').html('<strong>Error: Please try again</strong>');
            $('div#result').addClass('site-error');
        });
    });
});
</script>
<div class="section">
<div id="result" style="font-weight:bold"></div>
<form id="s-la-askform-form_21757" action="" enctype="multipart/form-data" method="post" name="s-la-askform-form_21757"><input name="instid" type="hidden" value="1367">
<input name="quid" type="hidden" value="1240">
<input name="qlog" type="hidden" value="0">
<input name="source" type="hidden" value="1">
<input name="ua" type="hidden" value="1">
<input id="librarian" name="val7" type="hidden">&nbsp;&nbsp;
<div class="input-field col s6"><label for="pquestion_21757">Subject</label>
<input id="pquestion_21757" class="form-control no-up-margin" name="pquestion" type="text" value=""></div>
<div class="input-field col s6"><label for="pdetails_21757">Content</label>
<textarea id="pdetails_21757" class="form-control no-up-margin" name="pdetails"></textarea></div>
<div class="input-field col s6"><label for="pemail_21757">Email (Required)</label>
<input id="pemail_21757" class="form-control no-up-margin" name="pemail" type="email" value=""></div>
<div class="input-field col s6"><label for="pname_21757">Name</label>
<input id="pname_21757"class="form-control no-up-margin" name="pname" type="text" value=""></div>
<button id="s-la-askform-submit-21757" class="btn" type="button">Submit</button>
</form></div>

### Administration

[Dalia Corkrum](corkrum@whitman.edu), College Librarian — 509-527-5193

[Kathleen Hutchison](hutchiks@whitman.edu), Administrative Assistant — 509-527-5191

### Archives and Special Collections

[Ben Murphy](murphybp@whitman.edu), Archivist and Special Collections Librarian — 509-526-4731

[Dana Bronson](bronsodm@whitman.edu), Associate Archivist — 509-526-4703

[Joel Gaytan](gaytanj@whitman.edu), Archive Assistant – 509-527-5922

### Collection Management

[Roger Stelk](stelkre@whitman.edu), Head of Collection Management — 509-527-5909

[Rich Pengra](pengrars@whitman.edu), Library Assistant, Collection Development — 509-527-5912

[Paige Morfitt](morfitpb@whitman.edu), Digital Assets and Metadata Librarian — 509-527-5920

[Rika Groff](groffrm@whitman.edu), Library Assistant, Cataloging — 509-527-5919

### Instructional, Research, and Access Services

[Lee Keene](keenelp@whitman.edu), Head of Research, Instruction, and Assessment — 509-527-5917

[Julie Carter](carterja@whitman.edu), Head of User Services — 509-527-5915

[Amy Blau](blauar@whitman.edu), Scholarly Communications Librarian — 509-527-4905

[Emily Pearson](pearsome@whitman.edu), Instructional & Research Services Librarian — 509-527-5918

[Jen Pope](popeja@whitman.edu), Access Services Manager — 509-527-5914

[Christel Holce](holceci@whitman.edu), Circulation Supervisor (Weekday Evenings) — 509-527-5192



### Systems

[Kun Lin](link@whitman.edu), Systems and Applications Librarian — 509-527-5916

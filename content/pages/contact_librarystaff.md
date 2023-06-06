---
title: Contact Library Staff
date: 2023-06-06T23:54:00.817Z
aliases:
  - /contact-a-librarian
  - /contact_librarian
url: contact_librarystaff
---
<style>
a{
        word-break: break-all;
}
</style>

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
<div id="result" style="font-weight:bold" role="region" aria-live="polite"></div>
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
<button id="s-la-askform-submit-21757" class="btn" type="button" aria-controls="result">Submit</button>
</form></div>

<div class="bootstrap-wrapper">
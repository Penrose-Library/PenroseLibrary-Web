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

## Staff Directory

<table class="striped" style="border:none;">
<tbody>
<tr>
<td>&nbsp;</td>
<td>
<h5>Administration</h5>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/daliapic.png" alt="Dalia Corkrum"></td>
<td>
<ul>
<li>Dalia Corkrum</li>
<li>College Librarian</li>
<li><a href="mailto:corkrum@whitman.edu">corkrum@whitman.edu</a></li>
<li><a href="tel:+15095275193">509-527-5193</a></li>
</ul>
</td>
<td>
<ul>
<li>Library administration</li>
<li>Budget matters</li>
<li>Suggestions</li>
<li>Gifts</li>
<li>Copyright</li>
<li>Open Access/Lever Press</li>
</ul>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/KATHLEEN-HUTCHINSON_2019.png" alt="Kathleen Hutchison"></td>
<td>
<ul>
<li>Kathleen Hutchison</li>
<li>Administrative Assistant</li>
<li><a href="mailto:hutchiks@whitman.edu">hutchiks@whitman.edu</a></li>
<li><a href="tel:+15095275191">509-527-5191</a></li>
</ul>
</td>
<td>
<ul>
<li>General library questions</li>
<li>Building issues</li>
</ul>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<h5>Instructional, Research, and Access Services</h5>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/leepic.png" alt="Lee Keene"></td>
<td>
<ul>
<li>Lee Keene</li>
<li>Head of Instruction, Research, &amp; Assessment</li>
<li><a href="mailto:keenelp@whitman.edu">keenelp@whitman.edu</a></li>
<li><a href="tel:+15095275917">509-527-5917</a></li>
</ul>
</td>
<td>
<ul>
<li>Schedule and provide classroom instruction</li>
<li>Providing one-on-one consultation</li>
<li>Answering research questions</li>
<li>Scheduling the CTL Classroom</li>
<li>Liaison for:
<ul class="normal-list">
<li>Anthropology</li>
<li>Asian Studies</li>
<li>Environmental Studies</li>
<li>English</li>
<li>Global Studies</li>
<li>Politics</li>
<li>SSRA</li>
<li>Writing Center</li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/AMY-BLAU_2019.png" alt="Amy Blau"></td>
<td>
<ul>
<li>Amy Blau</li>
<li>Scholarly Communication Librarian</li>
<li><a href="mailto:blauar@whitman.edu">blauar@whitman.edu</a></li>
<li><a href="tel:+15095274905">509-527-4905</a></li>
</ul>
</td>
<td>
<ul>
<li>Providing classroom instruction &amp; personal consultation</li>
<li>Answering research questions</li>
<li>Providing assistance with data sources &amp; data management</li>
<li>Scholarly communication</li>
<li>Liaison for:
<ul class="normal-list">
<li>Chemistry</li>
<li>Classics</li>
<li>Encounters</li>
<li>Foreign Languages</li>
<li>Physics</li>
<li>Hispanic Studies</li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/EMILY-PEARSON_2019.png" alt="Emily Pearson"></td>
<td>
<ul>
<li>Emily Pearson</li>
<li>Instructional &amp; Research Services Librarian</li>
<li><a href="mailto:pearsome@whitman.edu">pearsome@whitman.edu</a></li>
<li><a href="tel:+15095275918">509-527-5918</a></li>
</ul>
</td>
<td>
<ul>
<li>Providing classroom instruction &amp; personal consultation</li>
<li>Answering research questions</li>
<li>Liaison for:
<ul class="normal-list">
<li>Art</li>
<li>Gender Studies</li>
<li>History</li>
<li>Theatre &amp; Dance</li>
<li>Film &amp; Media Studies</li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/JULIE-CARTER_2019.png" alt="Julie Carter"></td>
<td>
<ul>
<li>Julie Carter</li>
<li>Head of User Services</li>
<li><a href="mailto:carterja@whitman.edu">carterja@whitman.edu</a></li>
<li><a href="tel:+15095275915">509-527-5915</a></li>
</ul>
</td>
<td>
<ul>
<li>Circulation policies</li>
<li>Providing classroom instruction&nbsp;&amp; personal consultation</li>
<li>Answering research questions</li>
<li>Liaison for:
<ul class="normal-list">
<li>Geology</li>
<li>Philosophy</li>
<li>Psychology</li>
<li>Sociology</li>
</ul>
</li>
</ul>
</td>
</tr>
<!---
<tr>
<td><img class="responsive-img" src="https://library.whitman.edu/wp-content/uploads/2017/12/jenpic.png" alt="Jen Pope"></td>
<td>
<ul>
<li>Jen Pope</li>
<li>Access Services Manager</li>
<li><a href="mailto:popeja@whitman.edu">popeja@whitman.edu</a></li>
<li><a href="tel:+15095275914">509-527-5914</a></li>
</ul>
</td>
<td>
<ul>
<li>Circulation and reserve issues</li>
<li>Summit Request</li>
<li>Interlibrary Loan</li>
</ul>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<ul>
<li>Christel Holce</li>
<li>Circulation Supervisor (Sunday &amp; Weekday Evenings)</li>
<li><a href="mailto:holceci@whitman.edu">holceci@whitman.edu</a></li>
<li><a href="tel:+1509-527-5192">509-527-5192</a></li>
</ul>
</td>
<td>
<ul>
<li>Circulation issues</li>
<li>Summit Request</li>
<li>Interlibrary Loan</li>
</ul>
</td>
</tr>
<tr>--->
<td>&nbsp;</td>
<td>
<h5>Whitman College and Northwest Archives</h5>
</td>
<td></td>
</tr>
<tr>
<td><img class="responsive-img" src="/archives/images/BEN-MURPHY_2019.png" alt="Ben Murphy"></td>
<td>
<ul>
<li>Ben Murphy</li>
<li>Archivist &amp; Head of Digital Services</li>
<li><a href="mailto:murphybp@whitman.edu">murphybp@whitman.edu</a></li>
<li><a href="tel:+15095274731">509-526-4731</a></li>
</ul>
</td>
<td>
<ul>
<li>College &amp; Northwest Archives</li>
<li>Rare books</li>
<li>Providing classroom instruction &amp; personal consultation</li>
<li>Digitization &amp; preservation</li>
<li>Liaison for:
<ul class="normal-list">
<li>Art History &amp; Visual Culture Studies</li>
<li>Music</li>
<li>Religion</li>
<li>Rhetoric, Writing, and Public Discourse</li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/archives/images/DANA-BRONSON_2019.png" alt="Dana Bronson"></td>
<td>
<ul>
<li>Dana Bronson</li>
<li>Associate Archivist</li>
<li><a href="mailto:bronsodm@whitman.edu">bronsodm@whitman.edu</a></li>
<li><a href="tel:+15095264703">509-526-4703</a></li>
</ul>
</td>
<td>
<ul>
<li>Providing classroom instruction with archival materials</li>
<li>Providing one-on-one consultation</li>
<li>Answering questions about college and local history</li>
</ul>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/archives/images/JOEL-GAYTAN_2019.png" alt="Joel Gaytan"></td>
<td>
<ul>
<li>Joel Gaytan</li>
<li>Archive Assistant</li>
<li><a href="mailto:gaytanj@whitman.edu">gaytanj@whitman.edu</a></li>
<li><a href="tel:+1509-527-5922">509-527-5922</a></li>
</ul>
</td>
<td>
<ul>
<li>General inquiries about the Archives</li>
<li>Answering questions about college and local history</li>
</ul>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<h5>Collection Management</h5>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/rogerpic.png" alt="Roger Stelk"></td>
<td>
<ul>
<li>Roger Stelk</li>
<li>Head of Collection Management</li>
<li><a href="mailto:stelkre@whitman.edu">stelkre@whitman.edu</a></li>
<li><a href="tel:+15095275909">509-527-5909</a></li>
</ul>
</td>
<td>
<ul>
<li>Collection development</li>
<li>Journal subscriptions</li>
<li>Donating materials</li>
<li>Liaison for:
<ul class="normal-list">
<li>Astronomy</li>
<li>BBMB</li>
<li>Biology</li>
<li>Economics</li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/paige-e1512411546358.png" alt="Paige Morfitt"></td>
<td>
<ul>
<li>Paige Morfitt</li>
<li>Digital Assets and Metadata Librarian</li>
<li><a href="mailto:morfitpb@whitman.edu">morfitpb@whitman.edu</a></li>
<li><a href="tel:+15095275920">509-527-5920</a></li>
</ul>
</td>
<td>
<ul>
<li>Digitization &amp; digital content creation</li>
<li>Metadata management</li>
<li>Liaison for:
<ul class="normal-list">
<li>Race &amp; Ethnic Studies</li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<ul>
<li>Rich Pengra</li>
<li>Library Assistant, Collection Development</li>
<li><a href="mailto:pengrars@whitman.edu">pengrars@whitman.edu</a></li>
<li><a href="tel:+1509-527-5912">509-527-5912</a></li>
</ul>
</td>
<td>
<ul>
<li>Book purchasing</li>
<li>Reserve material requests</li>
<li>Maintaining payment records for resources</li>
</ul>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<ul>
<li>Rika Groff</li>
<li>Library Assistant, Cataloging</li>
<li><a href="mailto:groffrm@whitman.edu">groffrm@whitman.edu</a></li>
<li><a href="tel:+1509-527-5919">509-527-5919</a></li>
</ul>
</td>
<td>
<ul>
<li>Catalog record errors</li>
<li>Cataloging and record maintenance</li>
<li>Periodical receiving and collection maintenance</li>
<li>Bindery</li>
</ul>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<h5>Systems</h5>
</td>
<td></td>
</tr>
<tr>
<td><img class="responsive-img" src="/images/staffimage/KUN-LIN_2019.png" alt="Kun Lin"></td>
<td>
<ul>
<li>Kun Lin</li>
<li>Systems &amp; Applications Librarian</li>
<li><a href="mailto:link@whitman.edu">link@whitman.edu</a></li>
<li><a href="tel:+15095275916">509-527-5916</a></li>
</ul>
</td>
<td>
<ul>
<li>Library website and Sherlock (Catalog)</li>
<li>Access databases</li>
<li>Liaison for:
<ul class="normal-list">
<li>Mathematics &amp; Computer Science</li>
</ul>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
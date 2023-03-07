---
title: Contact Library Staff
date: 2021-12-15
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

<table summary="Staff Directory for Penrose Library">
<caption>
    Staff Directory
</caption>
<thead>
    <tr>
        <th scope="col" colspan="2">
        </th>
        <th id="name" scope="col" colspan="2">
            Name
        </th>
        <th id="resp" scope="col" colspan="3">
            Responsibility
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <th id="admin" class="span" colspan="5" scope="colgroup">
            Administration
        </th>
    </tr>
    <tr>
        <th headers="admin" id="part1" colspan="2">
            <img class="responsive-img" src="/uploads/PingFu.png" alt="Ping Fu" 
        </th>
        <td headers="admin part1 name" colspan="2">
            <p>Ping Fu</p>
            <p>College Librarian</p>
            <p><a href="mailto:fup@whitman.edu">fup@whitman.edu</a></p>
            <p><a href="tel:+15095275193">509-527-5193</a></p>
        </td>
        <td headers="admin part1 resp" colspan="3">
            <ul>
                <li>Library administration</li>
                <li>Budget matters</li>
                <li>Suggestions</li>
                <li>Gifts</li>
                <li>Copyright</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th headers="admin" id="part2" colspan="2">
            <img class="responsive-img" src="/images/staffimage/KATHLEEN-HUTCHINSON_2019.png" alt="Kathleen Hutchison" />
        </th>
        <td headers="admin part2 name" colspan="2">
            <p>Kathleen Hutchison</p>
            <p>Administrative Assistant</p>
            <p><a href="mailto:hutchiks@whitman.edu">hutchiks@whitman.edu</a></p>
            <p><a href="tel:+15095275191">509-527-5191</a></p>
        </td>
        <td headers="admin part2 resp" colspan="3">
            <ul>
                <li>General library questions</li>
                <li>Building issues</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th id="irs" class="span" colspan="5" scope="colgroup">
            Instructional, Research, and Access Services
        </th>
    </tr>
    <tr>
        <th headers="irs" id="part3" colspan="2">
           <img class="responsive-img" src="/images/staffimage/leepic.png" alt="Lee Keene" />
        </th>
        <td headers="irs part3 name" colspan="2">
            <p>Lee Keene</p>
            <p>Head of Instruction, Research, &amp; Assessment</p>
            <p><a href="mailto:keenelp@whitman.edu">keenelp@whitman.edu</a></p>
            <p><a href="tel:+15095275917">509-527-5917</a></p>
        </td>
        <td headers="irs part3 resp" colspan="3">
            <ul>
                <li>Schedule and provide classroom instruction</li>
                <li>Providing one-on-one consultation</li>
                <li>Answering research questions</li>
                <li>Scheduling the CTL Classroom</li>
                <li>Liaison for:
                    <ul>
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
        <th headers="irs" id="part4" colspan="2">
           <img class="responsive-img" src="/images/staffimage/AMY-BLAU_2019.png" alt="Amy Blau" />
        </th>
        <td headers="irs part4 name" colspan="2">
            <p>Amy Blau</p>
            <p>Scholarly Communication Librarian</p>
            <p><a href="mailto:blauar@whitman.edu">blauar@whitman.edu</a></p>
            <p><a href="tel:+15095274905">509-527-4905</a></p>
        </td>
        <td headers="irs part4 resp" colspan="3">
            <ul>
            <li>Schedule and provide classroom instruction</li>
            <li>Providing one-on-one consultation</li>
            <li>Answering research questions</li>
            <li>Liaison for:
                <ul>
                    <li>Classics</li>
                    <li>Foreign Languages</li>
                    <li>Hispanic Studies</li>
                    <li>Chemistry </li>
                    <li>Physics</li>
                </ul>
            </li>
            </ul>
        </td>
    </tr>
    <tr>
        <th headers="irs" id="part5" colspan="2">
           <img class="responsive-img" src="/images/staffimage/EMILY-PEARSON_2019.png" alt="Emily Pearson" />
        </th>
        <td headers="irs part5 name" colspan="2">
            <p>Emily Pearson</p>
            <p>Instructional &amp; Research Services Librarian</p>
            <p><a href="mailto:pearsome@whitman.edu">pearsome@whitman.edu</a></p>
            <p><a href="tel:+15095275918">509-527-5918</a></p>
        </td>
        <td headers="irs part5 resp" colspan="3">
            <ul>
             <li>Accessibility questions or concerns </li>

   <li>Providing classroom instruction &amp; personal consultation</li>
                <li>Answering research questions</li>
                <li>Liaison for:
                    <ul>
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
        <th headers="irs" id="part6" colspan="2">
           <img class="responsive-img" src="/images/staffimage/JULIE-CARTER_2019.png" alt="Julie Carter" />
        </th>
        <td headers="irs part6 name" colspan="2">
            <p>Julie Carter</p>
            <p>Head of User Services</p>
            <p><a href="mailto:carterja@whitman.edu">carterja@whitman.edu</a></p>
            <p><a href="tel:+15095275915">509-527-5915</a></p>
        </td>
        <td headers="irs part6 resp" colspan="3">
            <ul>
                <li>Circulation policies</li>
                <li>Providing classroom instruction&nbsp;&amp; personal consultation</li>
                <li>Answering research questions</li>
                <li>Liaison for:
                <ul>
                    <li>Geology</li>
                    <li>Philosophy</li>
                    <li>Psychology</li>
                    <li>Sociology</li>
                </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <th headers="irs" id="part7" colspan="2">
          <img class="responsive-img" src="/images/staffimage/Ari_Kirby.jpeg" alt="Ari Kirby" style="max-width:180px" />
        </th>
        <td headers="irs part7 name" colspan="2">
            <p>Ari Kirby</p>
            <p>Access Service Manager</p>
            <p><a href="mailto:kirbyk@whitman.edu">kirbyk@whitman.edu</a></p>
            <p><a href="tel:+1509-527-5192">509-527-5192</a></p>
        </td>
        <td headers="irs part7 resp" colspan="3">
            <ul>
                <li>Circulation and course reserve</li>
                <li>Summit Request</li>
                <li>Interlibrary Loan</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th headers="irs" id="part8" colspan="2">
        </th>
        <td headers="irs part8 name" colspan="2">
            <p>Christel Holce</p>
            <p>Circulation Supervisor</p>
            <p><a href="mailto:holceci@whitman.edu">holceci@whitman.edu</a></p>
            <p><a href="tel:+1509-527-5192">509-527-5192</a></p>
        </td>
        <td headers="irs part8 resp" colspan="3">
            <ul>
                <li>Circulation issues</li>
                <li>Summit Request</li>
                <li>Interlibrary Loan</li>
            </ul>
        </td>
    </tr>
    <tr>
    <th headers="irs" id="part9" colspan="2">
        </th>
        <td headers="irs part9 name" colspan="2">
            <p>Dona LaFran</p>
            <p>Circulation Supervisor (Weekend)</p>
            <p><a href="mailto:lafrand@whitman.edu">lafrand@whitman.edu</a></p>
            <p><a href="tel:+1509-527-5192">509-527-5192</a></p>
        </td>
        <td headers="irs part9 resp" colspan="3">
            <ul>
                <li>Circulation issues</li>
                <li>Summit Request</li>
                <li>Interlibrary Loan</li>
            </ul>
        </td>
    </tr>

  <tr>
    <th headers="irs" id="part10" colspan="2">
        </th>
        <td headers="irs part10 name" colspan="2">
            <p>Anders Otterness</p>
            <p>Circulation Supervisor (Mornings)</p>
            <p><a href="mailto:otterna@whitman.edu">otterna@whitman.edu</a></p>
            <p><a href="tel:+1509-527-5192">509-527-5192</a></p>
        </td>
        <td headers="irs part10 resp" colspan="3">
            <ul>
                <li>Circulation issues</li>
                <li>Summit Request</li>
                <li>Interlibrary Loan</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th id="archives" class="span" colspan="5" scope="colgroup">
           Whitman College and Northwest Archives
        </th>
    </tr>
    <tr>
        <th headers="archives" id="part11" colspan="2">
        <img class="responsive-img" src="/archives/images/BEN-MURPHY_2019.png" alt="Ben Murphy" />
        </th>
        <td headers="archives part11 name" colspan="2">
            <p>Ben Murphy</p>
            <p>Archivist &amp; Head of Digital Services</p>
            <p><a href="mailto:murphybp@whitman.edu">murphybp@whitman.edu</a></p>
            <p><a href="tel:+15095274731">509-526-4731</a></p>
        </td>
        <td headers="archives part11 resp" colspan="3">
        <ul>
            <li>College &amp; Northwest Archives</li>
            <li>Rare books</li>
            <li>Providing classroom instruction &amp; personal consultation</li>
            <li>Digitization &amp; preservation</li>
            <li>Liaison for:
            <ul>
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
     <th headers="archives" id="part12" colspan="2">
	</th>
        <td headers="archives part12 name" colspan="2">
            <p>River Freemont</p>
            <p>Associate Archivist</p>
            <p><a href="mailto:freemonr@whitman.edu">freemonr@whitman.edu</a></p>
            <p><a href="tel:+1509-526-5922">509-526-4703</a></p>
        </td>
        <td headers="archives part12 resp" colspan="3">
            <ul>
                <li>College & Northwest Archives </li>
                <li>Answering questions about college and local history</li>
                <li>Providing one-on-one consultation</li>
            </ul>
        </td>
    </tr> 
    <tr>
	<th headers="archives" id="part13" colspan="2">   
        </th>
        <td headers="archives part13 name" colspan="2">
            <p>West Bales</p>
            <p>Archive Assistant</p>
            <p><a href="mailto:skrobiwd@whitman.edu">skrobiwd@whitman.edu</a></p>
            <p><a href="tel:+1509-527-5922">509-527-5922</a></p>
        </td>
        <td headers="archives part13 resp" colspan="3">
            <ul>
                <li>General inquiries about the Archives</li>
                <li>Answering questions about college and local history</li>
            </ul>
        </td>
    </tr><tr>
        <th id="collection" class="span" colspan="5" scope="colgroup">
          Collection Management
        </th>
    </tr>
    <tr>
        <th headers="collection" id="part14" colspan="2">
            <img class="responsive-img" src="/images/staffimage/rogerpic.png" alt="Roger Stelk" />
        </th>
        <td headers="collection part14 name" colspan="2">
            <p>Roger Stelk</p>
            <p>Head of Collection Management</p>
            <p><a href="mailto:stelkre@whitman.edu">stelkre@whitman.edu</a></p>
            <p><a href="tel:+15095275909">509-527-5909</a></p>
        </td>
        <td headers="collection part14 resp" colspan="3">
            <ul>
                <li>Collection development</li>
                <li>Journal subscriptions</li>
                <li>Donating materials</li>
                <li>Liaison for:
                    <ul>
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
        <th headers="collection" id="part15" colspan="2">
            <img class="responsive-img" src="/images/staffimage/paige-e1512411546358.png" alt="Paige Morfitt" />
        </th>
        <td headers="collection part15 name" colspan="2">
            <p>Paige Morfitt</p>
            <p>Digital Assets and Metadata Librarian</p>
            <p><a href="mailto:morfitpb@whitman.edu">morfitpb@whitman.edu</a></p>
            <p><a href="tel:+15095275920">509-527-5920</a></p>
        </td>
        <td headers="collection part15 resp" colspan="3">
            <ul>
                <li>Digitization &amp; digital content creation</li>
                <li>Metadata management</li>
                <li>Liaison for:
                    <ul>
                        <li>Race &amp; Ethnic Studies</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <th headers="collection" id="part16" colspan="2">
        </th>
        <td headers="collection part16 name" colspan="2">
            <p>Rich Pengra</p>
            <p>Library Assistant, Collection Development</p>
            <p><a href="mailto:pengrars@whitman.edu">pengrars@whitman.edu</a></p>
            <p><a href="tel:+1509-527-5912">509-527-5912</a></p>
        </td>
        <td headers="collection part16 resp" colspan="3">
            <ul>
                <li>Book purchasing</li>
                <li>Reserve material requests</li>
                <li>Maintaining payment records for resources</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th headers="collection" id="part17" colspan="2">
        </th>
        <td headers="collection part17 name" colspan="2">
            <p>Rika Groff</p>
            <p>Library Assistant, Cataloging</p>
            <p><a href="mailto:groffrm@whitman.edu">groffrm@whitman.edu</a></p>
            <p><a href="tel:+1509-527-5919">509-527-5919</a></p>
        </td>
        <td headers="collection part17 resp" colspan="3">
            <ul>
                <li>Catalog record errors</li>
                <li>Cataloging and record maintenance</li>
                <li>Periodical receiving and collection maintenance</li>
                <li>Bindery</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th id="systems" class="span" colspan="5" scope="colgroup">
          Systems
        </th>
    </tr>
    <tr>
        <th headers="systems" id="part18" colspan="2">
            </th>
        <td headers="systems part18 name" colspan="2">
                <p>Tracy Tolf</p>
                <p>Systems & Applications Librarian</p>
                <p><a href="mailto:tolft@whitman.edu">tolft@whitman.edu</a></p>
                <p><a href="tel:+15095275916">509-527-5916</a></p>
        </td>
        <td headers="systems part18 resp" colspan="3">
            <ul>
                <li>Library website and Sherlock (Catalog)</li>
                <li>Access databases</li>
                <li>Liaison for:
                    <ul>
                      <li>Mathematics &amp; Computer Science</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>

</tbody>
</table>
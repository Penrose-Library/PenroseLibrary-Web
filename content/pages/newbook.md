---
title: Recently acquired Items
date: 2021-07-16T21:58:53.672Z
---

<style>
	 #text-book-jacket>img{
		 height:15rem;
	 }
     .jacket-title{
         padding:0;
         bottom:auto;
         position:relative;
     }
</style>

<script>

  $(function(){   
      	$.ajax({
           url: 'https://penroselib-php.herokuapp.com/newitem/newbooklist_jsonfeed.php',
           type: 'GET',
           dataType: 'json',
	       cache:false,
 	}).done(function( bibarray ) {
            $.each(bibarray, function(key,value) {
             var display1='<div class="col-md-3 col-lg-3 col-sm-6 col-xs-6"><div class="card medium"><div id="text-book-jacket"> <img src="https://images.btol.com/ContentCafe/Jacket.aspx?UserID=WHTM43002&amp;Password=CC69392&amp;Return=T&amp;Type=M&amp;Value='+ value.isbn +'" alt="image for book cover"></div><div class="jacket-title"><a href="http://sherlock.whitman.edu/primo_library/libweb/action/dlSearch.do?institution=WHITC&amp;vid=WHITC&amp;tab=default_tab&amp;mode=Basic&amp;group=GUEST&amp;onCampus=true&amp;displayMode=full&amp;displayField=all&amp;search_scope=whitc_alma&amp;query=any,contains,'+value.id +'">'+ value.title + value.author +'</a></div></div></div>';
             $( "#results" ).append( display1 );
            }); 
	 });
  });
</script>
<div class="bootstrap-wrapper">
<div class="container-fluid">
    <div class="row" id="results">
	</div>
</div>
</div>

//JS for LibAnswers widget
function subq(){
		
      $.ajax ({
					url: "https://api2.libanswers.com/1.0/form/submit",
					data: $('#s-la-askform-form_21757').serialize(),
					success: function(d) {
						$('#sub').attr('disabled', 'disabled');
						if (d.status == 1) {
							$('#flashanswer').html(d.message);	
								} else {
							if (!d.error) { d.error = 'Error';$('#flashanswer').html(d.message);	 }
							
						}
					},
					type: 'POST',
					dataType: 'json'
				}).fail(function(){
					$('#flashanswer').html("Error: Please try again later.");	
					$('#sub').attr('disabled', 'disabled');
				});	
		
}
//set-up namespace if necessary
var springSpace = springSpace || {};
springSpace.la = springSpace.la  || {};
springSpace.la.css_loaded = springSpace.la.css_loaded || 0;

//TOPIC Content items
springSpace.la.showAllTopics = function(contentid) {
	springSpace.jq('#'+contentid+' .hidden').removeClass('hidden').attr('aria-hidden', false);
	springSpace.jq('#'+contentid+' .s-la-topic-toggle').remove();
	return false;
}


if (typeof springSpace.la.widget_2815 == 'undefined') {
	
	springSpace.la.widget_2815 = function() {
		
		this.id = 2815;
		this.iid = 1367;
		this.divselector = '#s-la-widget-'+this.id;
		this.$container = springSpace.jq(this.divselector);
		protocol = "https:"; //IE9 stupid CORS thing
		this.apiDomain = protocol+'//api2.libanswers.com';
		this.systemDomain = '//whitman.libanswers.com';
		this.css_url = this.apiDomain+'/css/LibAnswers_widget.css';
		this.usecss =0;
		this.customcss = "";
		this.solrUrl = 'https://search-platform.libapps.com/la2/';
		this.link_target = '_parent';
		
	this.widgethtml = '<form enctype="multipart/form-data" method="post" id="s-la-askform-form_21757" name="s-la-askform-form_21757" action="">    			<input type="hidden" value="1367" name="instid" />				<input type="hidden" value="1240" name="quid" />				<input type="hidden" value="0" name="qlog" />				<input type="hidden" value="1" name="source" />                <input type="hidden" value="1" name="ua" />                <input type="hidden" name="val7" id="librarian"/>                <div class="input-field col s6">               <label for="pquestion_21757">Subject</label>               <input type="text" value="" name="pquestion" id="pquestion_21757" class="libanswerbox" />                </div>                <div class="input-field col s6">                <label for="pdetails_21757">Questions</label>                <textarea id="pdetails_21757" class="libanswerbox pdetails_21757" name="pdetails"></textarea>                </div>                <div class="input-field col s6">                <label for="pemail_21757">Email (Required)</label>                <input type="email" aria-required="true" value="" name="pemail" id="pemail_21757" class="libanswerbox" />                </div>                <div class="input-field col s6">                <label for="pname_21757">Name</label>                <input type="text" value="" name="pname" id="pname_21757" class="libanswerbox" />                </div>                           			         </form>';
		this.activator = "<div id=s-la-widget-activator-2815 class=\"s-la-widget s-la-widget-sidetab s-la-widget-sidetab-right\"><a class=\"s-la-widget-sidetab-a\" href=\"#\" data-target=\"#s-la-widget-modal\">Ask Us<\/a><\/div>";
		this.search = {};
		this.question = {};
		this.chatwidget = {};
		this.cascadeServer = "https:\/\/cascade2.libchat.com:443";
				

			//modal load
			this.loadModal = function() {
				springSpace.jq(that.modalid+' .modal-body').html(this.widgethtml);
										//this.prepQuestionForm();
								}
				
				
							
				//!add the sidetab
				this.$button = springSpace.jq(this.activator);
				this.$button.appendTo('body');
				
							
				//!attach modal to button			
				this.modalid = '#s-la-widget-modal';
				var that=this;
				this.$button.on('click', function(){
					$('#sub').removeAttr('disabled');
					//write modal first if we need to
					$modal = springSpace.jq(that.modalid);
					if ($modal.length == 0) {
						$modal = springSpace.jq("<div id=\"s-la-widget-modal\" class=\"s-la-widget s-la-widget-modal modal fade\"tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"s-la-widget-modal-label\" aria-hidden=\"true\">\n\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t<section class=\"modal-content\">\n\t\t\t\t\t<header class=\"modal-header clearfix\"><button id=\"s-la-modal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" aria-label=\"Close\">&times;<\/button>\n\t\t\t\t\t\t\t<h1 class=\"modal-title\" id=\"s-la-widget-modal-label\">Ask Us<\/h1><\/header>\n\t\t\t\t\t<div id=\"flashanswer\" class=\"modal-body\">\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<div class=form-actions><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close<\/button><button id=\"sub\" class=\"btn btn-primary\" onclick=\"subq();\">Submit Your Question<\/button><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/section>\n\t\t\t\t<\/div>\n\t\t<\/div>");
						$modal.appendTo('body');
					}
					that.loadModal();
					springSpace.la.modal = $modal.modal({ backdrop: false });

				});
			
						
	} //end springSpace.la.widget
	
}


//!define the loader if we haven't already (in another widget)
if (typeof springSpace.la.widget_loader == 'undefined') {
	springSpace.la.widget_loader = function(widget_id) {
		this.widget_id = widget_id;
		var that = this;

		//check jquery version up to (not including) second decimal
		//is the current version >= minimum version
		this.minVersion = function(minv, curr) {
			var curr = curr || window.jQuery.fn.jquery;
			var c = curr.split('.');
			var m = minv.split('.');
			
			if (parseInt(c[0], 10) > parseInt(m[0], 10)) { return true; }
			else if (parseInt(c[0], 10) < parseInt(m[0], 10)) { return false; }
			else {
				if (typeof c[1] == 'undefined') { c[1] = 0; }
				if (typeof m[1] == 'undefined') { m[1] = 0; }
				if (parseInt(c[1], 10) > parseInt(m[1], 10)) { return true; }
				else if (parseInt(c[1], 10) < parseInt(m[1], 10)) { return false; }
				else { return true; }
			}
		}
		
		//load jquery into the page if necessary
		this.loadJquery = function(){
			var script_tag = document.createElement('script');
		    script_tag.setAttribute("type","text/javascript");
		    script_tag.setAttribute("src", "//code.jquery.com/jquery-1.11.3.min.js");
		    if (script_tag.readyState) { // for IE
		    	script_tag.onreadystatechange = function () {
			        if (this.readyState == 'complete' || this.readyState == 'loaded') {
			            that.scriptLoadHandler();
			        }
		    	};
		    } else {
			    script_tag.onload = that.scriptLoadHandler;
			}
		    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
		}
		
		//Called once jQuery has loaded
		this.scriptLoadHandler = function() {
		    // Restore $ and window.jQuery to their previous values and store the new jQuery in our local jQuery variable
		    if (window.jQuery) {
		    	springSpace.jq = window.jQuery.noConflict(true);
		    }
		    //load bootstrap js
		    that.boostrapLoadHandler();
		}
		
		//Bootstrap JS if we need it
		this.boostrapLoadHandler = function() {
	    	var script_tag = document.createElement('script');
	    	script_tag.setAttribute("type","text/javascript");
	    	script_tag.setAttribute("src","//api2.libanswers.com/js/LibAnswers_widget.js");	
	    	if (script_tag.readyState) { // for IE
	    		script_tag.onreadystatechange = function () {
		   	     if (this.readyState == 'complete' || this.readyState == 'loaded') {
		    	        that.loadWidget();
		      	  }
	    		};
	    	} else {
		   		script_tag.onload = that.loadWidget;
			}
	    	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
		}
		
		//called once we have jquery + bootstrap loaded	
		this.loadWidget = function () {			
		    //springSpace.la['widget_'+that.widget_id+'_inst'] = new springSpace.la['widget_'+that.widget_id]();
		    springSpace.jq(document).ready(function(){
		    	springSpace.la['widget_'+that.widget_id+'_inst'] = new springSpace.la['widget_'+that.widget_id]();
		    });
		}
		
		if (typeof springSpace.jq == "undefined") {
			if (window.jQuery === undefined) {
				this.loadJquery();
			} else {
				if (this.minVersion('1.10', window.jQuery.fn.jquery)) {
					springSpace.jq = window.jQuery;
					if (typeof springSpace.jq.fn.typeahead == "undefined") {
						this.boostrapLoadHandler();
					} else {
						this.loadWidget();
					}
				} else {
					this.loadJquery();
				}			    
			}
		} else if (typeof springSpace.jq.fn.typeahead == "undefined") {
			this.boostrapLoadHandler();
		} else {
			this.loadWidget();
		}
	}
}

(function(){
	springSpace.la.load_2815 = new springSpace.la.widget_loader(2815);
})(); //end anonymous function
$(document).ready(function(e) {

});
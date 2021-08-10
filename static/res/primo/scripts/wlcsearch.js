
WCLSearch = new function() {
  this.display = function (params, id) {
    var w="";
    var h="";
    var host="";
    var query="";
    var count=0;
    if (params["source"] == "platform") {
     params["layout"] = "h";
     params["scoping"] = "0";
     params["tabon"] = "1";
     params["tabid"] = "all:books:dvds:cds:arts";
     params["dftab"] = "all";
     params["w"] = 500;
     params["h"] = 128;
    }
    for (var o in params) {
      if (o=="w") {
        w=params[o];
      } else if (o=="h") {
        h=params[o];;
      } else if (o=="host") {
        host=params[o];
      }
      if (count>0) query += "&";
      count ++;
      query += o + "=" + encodeURIComponent(params[o]);
    }

    //var baseurl="${customInst.prefix}.worldcat.org/tools/searchiframe?";
    var launchurl = "http://" + host + "/tools/searchiframe?" + query;
    var embedcode = '<iframe src="';
    embedcode += launchurl;
    embedcode += '" scrolling="no" frameborder="0" width="' + w + '" height="' + h + '"></iframe>';
    if (document.getElementById(id) != null) {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).style.width = w;
      document.getElementById(id).style.height = h;
      document.getElementById(id).innerHTML = embedcode;
    }
  }
}


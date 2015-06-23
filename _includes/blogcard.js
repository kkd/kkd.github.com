javascript:(function(){
	javascript:(function(d,j,b,s){
		function r(){
			setTimeout(function(){
				(typeof jQuery=='undefined')?r():b(jQuery)},99)}(j)?b(jQuery):d.body.appendChild(d.createElement('script')).src='//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',r()})(document,this.jQuery,function($){
					var ogurl=$("meta[property='og:url']").attr("content");var ogtitle=$("meta[property='og:title']").attr("content");var ogdesc=$("meta[property='og:description']").attr("content");var ogimg=$("meta[property='og:image']:last").attr("content");var urlhost=location.host;
if(ogtitle==null || ogtitle==""){ogtitle=document.title};
if(ogurl==null || ogurl==""){ogurl=location.href};
if(ogdesc==null || ogdesc==""){ogdesc=""};
if(ogimg==null || ogimg==""){
	imgsrc=$("img:first").attr("src");
	if(imgsrc.search(/^http/)==0){ogimg=imgsrc}
	else if(imgsrc.search(/^\/\//)==0){ogimg="http:"+imgsrc}
	else if(imgsrc.search(/^\//)==0){ogimg="http://"+urlhost+imgsrc}
	else {ogimg="http://"+urlhost+"/"imgsrc};
if(ogimg==null || ogimg==""){ogimg="http://capture.heartrails.com/100x100/?"+ogurl};};
var card='{% include blogcard.html site="'+urlhost+'" url="'+ogurl+'" image="'+ogimg+'" title="'+ogtitle+'" desc="'+ogdesc+'" %}';
prompt("blogcard",card);});})();
$.fn.loadCss = function(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}
var popUpTimer = 0;
$.nWpopUp = function(message,type,parent,remove) {
	var buffer = '<div ';
			buffer += 'class="alert flashAlert'+((parent)?' ':' popUp ')+'alert-'+((type)?type:'warning')+'"';
			buffer += 'data-alert="alert">';
		buffer += '<a class="close"  data-dismiss="alert">×</a><p>'+message+'</p></div>';
	$(".flashAlert").remove();
	$(parent?parent:"BODY").prepend(buffer);
	if (remove != 'noRemove')
		$(function(){
			clearInterval(popUpTimer);
			popUpTimer = setTimeout(function(){
				$(".flashAlert").hide(400).delay(400).remove();
			},15000)})
};
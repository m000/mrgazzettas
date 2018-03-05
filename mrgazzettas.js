var getQueryString = function (field, url) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};

var loadDrupalSettings = function(drupal_env_re) {
	var Drupal = {"settings": {}};
	for (i=0; i<document.scripts.length; i++) {
		var script = document.scripts.item(i);
		if (script.src) {
			// externally loaded script
			continue;
		}

		if (drupal_env_re.test(script.innerHTML)) {
			// calls jQuery.extend() to merge objects
			eval(script.innerHTML);
			break;
		}
	}
	return Drupal.settings;
}

var comments = document.querySelector("#comments");
var comments_list = comments.querySelector(".comments_list");
var comments_page_first = 1;
var comments_page_last = parseInt(getQueryString('page', comments.querySelector(".pager-last a")));
var comments_page_current = parseInt(comments.querySelector(".pager-current").innerText);
var drupal_env_re = /jQuery\.extend\s*\(\s*Drupal.settings\s*,/;
var drupal_settings = loadDrupalSettings(drupal_env_re);


document.body.style.border = "10px solid red";
//alert(comments_page_last+1);
//
$("#comments").css({"border-color": "#C1E0FF", "border-width":"10px", "border-style":"solid"});
console.log(drupal_settings);
console.log('http://' + drupal_settings.wc.pg + '/comments/' + drupal_settings.wc.nid);
alert("ok");


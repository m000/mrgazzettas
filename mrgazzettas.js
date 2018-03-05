var getQueryString = function (field, url) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};

var comments = document.querySelector("#comments");
var comments_list = comments.querySelector(".comments_list");
var comments_page_first = 1;
var comments_page_last = parseInt(getQueryString('page', comments.querySelector(".pager-last a")));
var comments_page_current = parseInt(comments.querySelector(".pager-current").innerText);


document.body.style.border = "10px solid red";
//alert(comments_page_last+1);

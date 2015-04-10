$(document).ready(function(){
	setTimeout(function(){
		startLeftSwipe(1)
	}, 3000);
});

function startLeftSwipe(num) {
	var next = num+1;
	var $circles = $(".circle");
	var $circle = $circles.eq(num);
	var $activeCircle = $(".circle-active");
	$circle.addClass("circle-active");
	$activeCircle.removeClass("circle-active");
	var $sections = $(".introduction");
	var $section = $sections.eq(num);
	var $activeSection = $(".full-screen-active");
	$section.css("left","100vw");
	$section.addClass("full-screen-active").animate({
		"left": "0px"
	},1000, function(){
	});
	$activeSection.animate({
		"left": "-100vw"
	},1000, function(){
		$(this).removeClass("full-screen-active");
	});
	if (num == $sections.length - 1)
		next = 0;
	setTimeout("startLeftSwipe("+next+")", 10000);
}
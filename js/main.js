//Sidebar sliding using toggle class to realize. Classes are defined in modules/_sidenav.sass

$(function () {
	var $sideNav = $('.header-container'),
		$main = $('.main-container');

	$sideNav.hover(		
		function() {
			$sideNav.addClass('is-expanded');
			$main.addClass('is-translated');		
		}, 
		function() {
			$sideNav.removeClass('is-expanded');
			$main.removeClass('is-translated');		
	});
});

//Open new window when click <a href=""> that are outward links.
$(function() {
	var outLinks = $('a[href^=http]');
	outLinks.attr('target', '_blank');
});
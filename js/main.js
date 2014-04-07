//Sidebar sliding using toggle class to realize. Classes are defined in modules/_sidenav.sass

$(function () {
	$('.header-container').hover(		
	function(event) {
		var $this = $(this),
			$main = $('.main-container');		

		// $this.css('background-color', 'navy');
		$this.addClass('is-expanded');
		$main.addClass('is-translated');
		event.stopProporgation;
	}, 
	function() {
		var $this = $(this),
			$main = $('.main-container');

		// $this.css('background-color', 'violet');
		$this.removeClass('is-expanded');
		$main.removeClass('is-translated');
		event.stopProporgation; 
	});
});

//Setting nav color for the current page
$(function () {	
	$('.fa-spin').css('color', 'rgba(19,82,162,1)');
});

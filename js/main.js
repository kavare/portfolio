
$(function(){
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


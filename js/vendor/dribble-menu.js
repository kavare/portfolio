//Revised from Matthew Van Dusen @ Codepen
$(function () {
	$('div.dribble-menu').find('li').on('click', function () {
		var $this = $(this);
		$this.siblings().removeClass('selected');
		$this.addClass('selected');
		$('div.dribble-bottoms').hide();
		$('#' + $this.attr('data-id')).slideDown(800);
	});
    	
	$('span.toggle').on('click', function () {
		var $this = $(this);
		$this.find('span.toggle_inner').toggleClass('on').closest('div.item').toggleClass('on');
	});

	//default "on" settings
	$('[data-id="HTML5"]').click();	
	$('.dribble-bottoms div[data-skill="able"]').addClass('on').find('.toggle_inner').addClass('on');
});
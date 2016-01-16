$(document).ready(function(){
	$('form').submit(function(){
		$(this).serialize();
		console.log( $('.description').val());
		$('.contact-cards').append('<div class="contact"><h3>' + $('[name=firstname]').val() + ' ' + $('[name=lastname]').val() + '</h3><p>Click for description!</p><p class="hidden description">' + $('.description').val() + '</p></div>');
		return false;
	});
	$(document).on('click', '.contact', function(){
		$(this).children('p, h3').toggleClass('hidden');
	})
});
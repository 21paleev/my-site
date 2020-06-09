$(document).ready(function(){
	
//Модальные окна
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation').fadeOut('slow');
	});
	
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mails/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.find("input").val("");
				$('#consultation').fadeOut();
				$('.overlay, #thanks').fadeIn('slow');
				
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


//Боковое меню и гамбургер

});

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu__nav'),
	menuItem = document.querySelectorAll('.menu__item'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu__nav_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu__nav_active');
		});
	});
});
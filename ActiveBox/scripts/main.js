$(function () {

	// Variables
	let page = $('html, body');
	let top_line = $("#top_line")
	let nav = $("#nav")
	let navToggle = $("#burger");
	let header = $("#header");
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();



	//Fixed top-line
	checkScroll(scrollPos, headerH);

	$(window).on("scroll resize", function () {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, headerH);
	});

	function checkScroll(scrollPos, headerH) {

		if (scrollPos > headerH) {
			top_line.addClass("fixed");
		} else {
			top_line.removeClass("fixed");
		}

	};



	// Burger button
	navToggle.on("click", function (event) {
		event.preventDefault();
		nav.toggleClass("show");
		navToggle.toggleClass("on");
	});



	// Smooth scroll
	$('a[href*="#"]').click(function () {
		page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 700);
		return false;
	});

});
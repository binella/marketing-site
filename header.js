$('.mobile-button').click(function(event) {
	toggleHeader();
	event.preventDefault();
	return false;
});

var isOpen = false;

function toggleHeader() {
	if (isOpen) {
		hideHeader();
	} else {
		showHeader();
	}
}

function showHeader() {
	$('.header').animate({
    	height: 359,
    	paddingTop: 284
    }, 300);

    $('.bothmenus .nav ul').animate({
    	height: 284
    }, 300);

    isOpen = true;
}

function hideHeader() {
	$('.header').animate({
    	height: 75,
    	paddingTop: 0
    }, 300);

    $('.bothmenus .nav ul').animate({
    	height: 0
    }, 300);

    isOpen = false;
}
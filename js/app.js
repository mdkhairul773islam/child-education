// fixed nav bar in jquery
$(window).scroll(function() {
    if($(this).scrollTop() > 75) {
        $('.navbar').addClass('active');
    } else {
        $('.navbar').removeClass('active');
    };
});
$(window).scroll(function() {
    if($(this).scrollTop() > 25) {
        $('.frame_header .hader_nav,.header_section .container,.about_header .container').addClass('active');
    } else {
        $('.frame_header .hader_nav,.header_section .container,.about_header .container').removeClass('active');
    };
});

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
	if (e.ctrlKey && e.keyCode === 85) {
	      return false;
	}
};
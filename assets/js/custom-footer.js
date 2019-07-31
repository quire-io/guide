
$(document).ready(function() {
  
  $('.sidebar > .nav__list > input').change(function() {
    $('body').toggleClass('sticky-sidebar', this.checked);
  });

  $('.toc__menu').on('click', 'a', function(e) {
  	var idx = this.href.indexOf("#");
	var hash = idx != -1 ? this.href.substring(idx) : null;

	if (hash) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(hash).offset().top - 64/*header height*/
		}, 500);

		e.preventDefault(); 
		return false;
	}

	return true;
  });
});

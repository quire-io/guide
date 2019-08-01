
$(document).ready(function() {
  
  $('.sidebar > .nav__list > input').change(function() {
    $('body').toggleClass('sticky-sidebar', this.checked);
  });

  $('.toc__menu').on('click', 'a', function(e) {
  	var idx = this.href.indexOf("#");
	var hash = idx != -1 ? this.href.substring(idx) : null;

	if (hash) {
		var height = $('#header').outerHeight() + $('.toc-label').outerHeight();
		$('#ac-toc').prop("checked", false).change();

		$([document.documentElement, document.body]).animate({ 
			scrollTop: $(hash).offset().top - height - 8/*spacing*/
		}, 500);

		e.preventDefault(); 
		return false;
	}

	return true;
  });
});

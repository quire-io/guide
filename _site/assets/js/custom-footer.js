
var initPlugin = function(loggedIn) {//called from blog.js
	$('.send-feedback a').attr('href', loggedIn ? 'https://quire.io/feedback' : 'mailto:feedback@quire.io');
}

$(document).ready(function() {
	function scrollToID(hashV, ms) {
		if (hashV) {
			var idx = hashV.indexOf("#");
			var hash = idx != -1 ? hashV.substring(idx) : null;

			if (hash) {
				var height = $('#header').outerHeight() + $('.toc-label').outerHeight();
				$('#ac-toc').prop("checked", false).change();

				var top = $(hash).offset().top - height - 8;/*spacing*/
				if (window.innerWidth < 768)
					top -= 30;
				$([document.documentElement, document.body]).animate({ 
					scrollTop: top
				}, ms);

				return true;
			}
		}

		return false;
	}

	$('.sidebar > .nav__list > input').change(function() {
		$('body').toggleClass('sticky-sidebar', this.checked);
	});

	$('.toc__menu').on('click', 'a', function(e) {
		var idx = this.href.indexOf("#");
		var hash = idx != -1 ? this.href.substring(idx) : null;

		if (scrollToID(hash)) {
			e.preventDefault();
			return false;
		}

		return true;
	});

	if (!scrollToID(window.location.hash, 0)) {
		var active = $('.nav__items li > a.active');
		if (active.length > 0 && active.offset().top > $('body').height())
			$('.sidebar').scrollTop(active.offset().top - ($('body').height() / 2));
	}
});


$(document).ready(function() {

	$('.sidebar > .nav__list > input').change(function() {
		$('body').toggleClass('sticky-sidebar', this.checked);
	});

	function toggleSearch() {
		var body = $('body');
		var open = body.hasClass('open-search');
		body.toggleClass('open-search', !open);
		if (!open) {
			$('#results').html('');
		}
	}
	$('.search-toggle a').click(toggleSearch);
	$('.search-close').click(toggleSearch);
	$('.search-input').keyup(function(e) {
		if (e.keyCode == 27)
			toggleSearch();
	})

	// $('document').

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

	///search
	// function showMenu(list) {
	// 	var input = $('#search-input');
	// 	if (!input.hasClass('open')) {
	// 		input.addClass('open');
	// 	}

	// 	var searchMenu = $('#search-menu');
	// 	searchMenu.html('');
	// } 

	// function hideMenu() {

	// }

	// $('#search-input').change(function(e) {
	// 	var text = $(this).text();
	// 	var list = idx.search(text);
	// 	showMenu(list);
	// })
});

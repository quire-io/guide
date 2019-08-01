
$(document).ready(function() {

	$('.sidebar > .nav__list > input').change(function() {
		$('body').toggleClass('sticky-sidebar', this.checked);
	});

	function toggleSearch() {
		var body = $('body');
		var open = body.hasClass('open-search');
		body.toggleClass('open-search', !open);
		if (open) {
			$('.search-input').focus();
		} else {
			$('.search-input').val('');
		}
	}

	function toggleSearching(isSearching) {
		$('body').toggleClass('searching', isSearching);
	}

	$('.search-toggle a').click(toggleSearch);
	$('.search-close').click(toggleSearch);
	$('.search-input').keyup(function(e) {
		$(this).change();
		if (e.keyCode == 27)
			toggleSearch();
	}).change(function() {
		toggleSearching($(this).val().length > 0);
	}).focus(function() {
		toggleSearching($(this).val().length > 0);
	});

	$(document)
	.on('click', function () {
		toggleSearching(false);
	})
	.on('click', '#results, .search-input', function (e) {
    	e.stopPropagation();//stop close dropdown    
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

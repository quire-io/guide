
$(document).ready(function() {
  
  $('.sidebar > .nav__list > input').change(function() {
    $('body').toggleClass('sticky-sidebar', this.checked);
  });
});

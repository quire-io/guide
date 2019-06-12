
$(document).ready(function() {
  
  $('.sidebar > .nav__list > input').change(function() {
    console.log('check' + this.checked);
    $('body').toggleClass('sticky-sidebar', this.checked);
  });
});

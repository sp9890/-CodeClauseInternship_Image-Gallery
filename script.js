$(document).ready(function() {
  $('.tab-item').click(function() {
    var tab = $(this).attr('id');
    if (tab == 'all') {
      $('.gallery-item').addClass('hide');
      setTimeout(function() {
        $(".gallery-item").removeClass('hide');
      }, 500);
    } else {
      $('.gallery-item').addClass('hide');
      setTimeout(function() {
        $('.' + tab).removeClass('hide');
      }, 300);
    }
  });
});
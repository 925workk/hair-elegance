$(document).ready(function() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
    
        $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        )
    })
    
    $(window).scroll(function () { 
        if ($(window).scrollTop() > 500) {
          $('.nav-section').addClass('fixed-top');
          $('.navbar-brand').addClass('invisible');
        }
    
        if ($(window).scrollTop() < 501) {
          $('.nav-section').removeClass('fixed-top');
          $('.navbar-brand').removeClass('invisible');
        }
      });
});
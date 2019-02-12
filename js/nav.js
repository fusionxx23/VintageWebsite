$( document ).ready(function() {
    $(window).scroll(function() {
        $('#logo').toggleClass('scrolled',$(this).scrollTop() > 100);  
        $('nav').toggleClass('navScroll', $(this).scrollTop() > 100); 
    }); 
});


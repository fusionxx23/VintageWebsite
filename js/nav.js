$( document ).ready(function() {
    $(window).scroll(function() {
        $('#logo').toggleClass('scrolled',$(this).scrollTop() > 20);  
    }); 
});


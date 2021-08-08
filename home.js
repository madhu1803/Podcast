$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        console.log("Scroll ", scroll);
        if (scroll >= 530) {
            $("#navbar").addClass("navbar-fixed-top-scrolled");
        } else {
            $("#navbar").removeClass("navbar-fixed-top-scrolled");
        }
    });
});

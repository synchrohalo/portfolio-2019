$( document ).ready(function() {
    $( "#menu-icon" ).click(function() {
        $( ".mobile-menu" ).fadeIn( 200 );

        $( "body" ).css( "overflow", "hidden" );
    });

    $( ".mobile-menu .icon" ).click(function() {
        $( ".mobile-menu" ).fadeOut( 200 );

        $( "body" ).css( "overflow", "visible" );
    });

    var currentScroll = $(window).scrollTop();

    $(window).scroll(function(){
        //$(".clouds .left").css("opacity", 1 - $(window).scrollTop() / 300);
        var newScroll = $(window).scrollTop();
        console.log( currentScroll );

        console.log( newScroll );

        if( newScroll < currentScroll ) {
            $("nav").fadeIn( 200 );
        } else {
            $("nav").fadeOut( 200 );
        }

        currentScroll = newScroll;
    });    
});
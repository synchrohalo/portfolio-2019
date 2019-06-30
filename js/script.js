$( document ).ready(function() {
    //$( "nav" ).css( "display", "none" );

    $( "#menu-icon" ).click(function() {
        $( ".mobile-menu" ).fadeIn( 200 );

        $( "body" ).css( "overflow", "hidden" );

        $( ".mobile-menu .link" ).click(function() {
            $( ".mobile-menu" ).fadeOut( 200 );
            $( "body" ).css( "overflow", "visible" );
        });
    });

    $( ".mobile-menu .icon" ).click(function() {
        $( ".mobile-menu" ).fadeOut( 200 );

        $( "body" ).css( "overflow", "visible" );
    });

    var currentScroll = $(window).scrollTop();

    $(window).scroll(function(){
        var newScroll = $(window).scrollTop();

        /*if( newScroll < (currentScroll) ) {
            $("nav").fadeIn( 200 );
        } else {
            $("nav").fadeOut( 200 );
        }*/

        /*if( currentScroll == contactPos ) {
            console.log(contactPos);
            $( "#contact" ).addClass( "fade-in one" );
        }

        $( "#contact" ).removeClass( "fade-in one" );*/

        currentScroll = newScroll;
    });    
});
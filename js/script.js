$( document ).ready(function() {
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
    var contactPos = $( "footer" ).scrollTop();

    $(window).scroll(function(){
        //$(".clouds .left").css("opacity", 1 - $(window).scrollTop() / 300);
        var newScroll = $(window).scrollTop();
        //console.log( currentScroll );

        //console.log( newScroll );

        if( newScroll < currentScroll ) {
            $("nav").fadeIn( 200 );
        } else {
            $("nav").fadeOut( 200 );
        }

        /*if( currentScroll == contactPos ) {
            console.log(contactPos);
            $( "#contact" ).addClass( "fade-in one" );
        }

        $( "#contact" ).removeClass( "fade-in one" );*/

        currentScroll = newScroll;
    });    
});
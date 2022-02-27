var musica = document.getElementById('musica');
var btnPlay = document.getElementById('btnPlay');



btnPlay.addEventListener('click', iniciar );


function iniciar(){
    musica.play();
    
    $( "#btnPlay" ).removeClass( "animate__lightSpeedInRight animate__delay-4s" );
    $( "#btnPlay" ).addClass( "animate__fadeOutLeft" );
    $(".wrapperFoco").addClass("animate__animated animate__fadeOutUp animate__delay-2s");

    $( ".wrapperFondo1" ).removeClass( "animate__fadeIn animate__delay-5s" );
    $( ".wrapperFondo1" ).addClass( "animate__fadeOut animate__delay-2s" );

    
    $( ".wrapperInvitacion" ).addClass( "animate__animated animate__fadeInUp animate__delay-2s" );

    $(".wrapperInvitacion").css("display", "block");
    setTimeout(() => {
        $(".saludo").css("display", "block");    
        $(".booI").css("display", "block");    
    }, 3000);
    

    
    
}
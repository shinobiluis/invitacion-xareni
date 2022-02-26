var musica = document.getElementById('musica');
var btnPlay = document.getElementById('btnPlay');



btnPlay.addEventListener('click', iniciar );


function iniciar(){
    musica.play();
}
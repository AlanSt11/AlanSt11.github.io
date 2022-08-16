/* =======================================
            OPCION DE COMPARTIR
   =======================================
*/

const btnShare = document.getElementById('share');

btnShare.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Alan St',
            text: 'Encuentrame en todas las redes sociales',
            url: ''
        });
    } else {
        navigator.clipboard.writeText('Link copeado correctamente');
    }
    
});

/* =======================================
           EFECTO MAQUINA DE ESCRIBIR              
    =======================================
*/

const typed = new Typed('.typed', {
    strings: ['<i class="Emprendedor</i>', '<i class="title">programador</i>'],

    color: '#000',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
})
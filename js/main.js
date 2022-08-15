const openModal = document.querySelector('.btn-suscrib');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

/* =======================================
            OPCION DE COMPARTIR
   =======================================
*/

const btnShare = document.getElementById('share');

btnShare.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Alan St',
            text: 'Formas de contactarme',
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
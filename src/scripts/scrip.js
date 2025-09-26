let indiceNoticiaAtual = 0;

function proximaNoticia() {
    const artigosNoticia = document.querySelectorAll('.carrossel-noticias .artigo-noticia');
    artigosNoticia[indiceNoticiaAtual].classList.add('hidden');
    indiceNoticiaAtual = (indiceNoticiaAtual + 1) % artigosNoticia.length;
    artigosNoticia[indiceNoticiaAtual].classList.remove('hidden');
}

function inscrever() {
    const entradaEmail = document.querySelector('.formulario-boletim input');
    if (entradaEmail.value) {
        alert('¡Gracias por suscribirte a nuestro boletín! Revisa tu correo.');
        entradaEmail.value = '';
    } else {
        alert('Por favor, ingresa un correo válido.');
    }
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('active');
            this.classList.toggle('active');
            document.querySelectorAll('.submenu').forEach(s => {
                if (s !== submenu) s.classList.remove('active');
            });
            document.querySelectorAll('.menu-item').forEach(i => {
                if (i !== this) i.classList.remove('active');
            });
        }
    });
});
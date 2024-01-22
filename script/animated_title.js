//---------TIMERS--------------
//======<H1>=======
document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementsByClassName('titulo_animado');
    setTimeout(function(){
        for (let i = 0; i < titulo.length; i++){
            titulo[i].classList.add('active');
        }
    }, 800);

//======<h2_SUBTITULO>=======
    setTimeout(function(){
        const h2titulo = document.getElementById('titulo_desc');
        h2titulo.classList.add('active');
    }, 1000);

//============<DIV_CAPA-DE-FUNDO===========>
    setTimeout(function(){
        const foto = document.getElementById('foto_home');
        foto.classList.add('active');
    }, 500);

    setTimeout(function(){
        const h2titulo = document.getElementById('menu');
        h2titulo.classList.add('active');
    }, 2000);
});

//============<Detector de LiveScroll>===========
window.addEventListener('scroll', function(){
    //------------Descriçoes_<ARTICLE>------------
    var tags = document.querySelectorAll('.scroll-detec');
    tags.forEach(function(tag) {
        var rect = tag.getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        ) {
            tag.classList.add('active');
        } else {
            tag.classList.remove('active');
        }
    }); 
    //------------Fotos_<ARTICLE>------------
    var fotos = document.querySelectorAll('.fotos_articles');
    fotos.forEach(function(img) {
        var rect = img.getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        ) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    }); 
});

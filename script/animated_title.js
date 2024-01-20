//----TITULO_ANIMADO----

//======<H1>=======
document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementsByClassName('titulo_animado');
    setTimeout(function(){
        for (let i = 0; i < titulo.length; i++){
            titulo[i].classList.add('active');
        }
    }, 800);

//======<h2_titulo_desc>=======
    setTimeout(function(){
        const h2titulo = document.getElementById('titulo_desc');
        h2titulo.classList.add('active');
    }, 1000);

    setTimeout(function(){
        const foto = document.getElementById('foto_home');
        foto.classList.add('active');
    }, 500);

    setTimeout(function(){
        const h2titulo = document.getElementById('menu');
        h2titulo.classList.add('active');
    }, 2000);
});

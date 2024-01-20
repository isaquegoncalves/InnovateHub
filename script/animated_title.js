//----TITULO_ANIMADO----

//======<H1>=======
document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementsByClassName('titulo_animado');
    setTimeout(function(){
        for (let i = 0; i < titulo.length; i++){
            titulo[i].classList.add('active');
        }
    }, 500);
//======<h2_titulo_desc>=======
    setTimeout(function(){
        const h2titulo = document.getElementById('titulo_desc');
        h2titulo.classList.add('active');
    }, 1000);
});

//===========Foto_home===========
document.addEventListener("DOMContentLoaded", function(){
    const foto = document.getElementById('foto_home');
    setTimeout(function(){
        foto.classList.add('active');
    }, 500);
});
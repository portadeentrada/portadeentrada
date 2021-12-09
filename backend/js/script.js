//Function MenuJS

function abrirMenu() {

    document.getElementById('menuAberto').style.right = "0";

}

function fecharMenu() {

    document.getElementById('menuAberto').style.right = "100%";

}

//Function MenuAcessível

function abrirAcessmenu() {

    document.getElementById('acessmenu').style.left = "0";

    document.getElementById('body').style.overflow = "hidden";

}

function fecharAcessmenu() {

    document.getElementById('acessmenu').style.left = "100%";

    document.getElementById('body').style.overflow = "hidden";

    document.getElementById('mobile').style.overflowX = "hidden";

}

//Modal Game

function abrirModalgame() {

    document.getElementById('container-labirinto').style.right = "0";

}

function fecharModalgame() {

    document.getElementById('container-labirinto').style.right = "100%";

}

//Email

document.getElementById("email-func").addEventListener("click", abrirMail);

function abrirMail(){

    alert('contatoportadentrada@gmail.com');

}

//AudioDescrição

var buttonN1 = document.getElementById('nivel1-a').addEventListener('mouseenter', function(){
    var audio = document.getElementById('audio-N1')
    audio.play()
})

var buttonN1 = document.getElementById('nivel2-a').addEventListener('mouseenter', function(){
    var audio = document.getElementById('audio-N2')
    audio.play()
})

var buttonN1 = document.getElementById('nivel3-a').addEventListener('mouseenter', function(){
    var audio = document.getElementById('audio-N3')
    audio.play()
})


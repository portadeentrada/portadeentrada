/*Função aumentar e diminuir font-size*/

//Ativa uma função universal
window.onload = function () {
    
    //Variaveis de seleção do Body, puxar id dos botões
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('btnfontMais');
    var elementBtnDecreaseFont = document.getElementById('btnfontMenos');

    //Define 100% da font definida no seletor universal do css *
    var fontSize = 100;

    //Incrementa 5% a mais na font
    var increaseDecrease = 5;

    //Funções de A+ e A- para aumentar e diminuir as fontes
    elementBtnIncreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    elementBtnDecreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}
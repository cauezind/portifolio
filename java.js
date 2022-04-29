var home = document.querySelector('#home-name');
var projetos = document.querySelector('#projetos-name');
var sobre = document.querySelector('#sobre-name');
var menu = document.querySelector('.menu')
var itens = document.querySelector('.menu-itens')
var checkbox = document.querySelector('#toggle')



function start (){
    home.addEventListener('click', disapear);
    projetos.addEventListener('click', disapear);
    sobre.addEventListener('click', disapear);

    load();
    
}

function disapear (){

    menu.style.visibility="hidden";
    itens.style.visibility="hidden";
}

function load(){

    checkbox.addEventListener('click', apear)

}

function apear(){
    menu.style.visibility="visible";
    itens.style.visibility="visible";
}
start();


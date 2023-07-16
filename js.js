let itens = document.querySelector('.itens');
let abrir = document.querySelector('.abrir');
let fechar = document.querySelector('.fechar');

abrir.addEventListener("click", abrirMenu);
fechar.addEventListener("click", fecharMenu);


function abrirMenu(){
    itens.style.display = 'block';
    itens.style.left = '0'
};
function fecharMenu(){
    itens.style.left = '-100%'
};
let btnMenu = document.querySelector('.menuBars');
let menu = document.querySelector('.menu');

menu.style.display = 'none';
menu.style.transform = 'translateX(-50px)';

function abrirMenu() {
    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = 'block';
        menu.style.transition = 'transform 0.5s ease-in-out';
        menu.style.transform = 'translateX(-50px)'; // Começa fora da tela (ex: -100%)
        setTimeout(() => {
            menu.style.transform = 'translateX(0px)';
        }, 10); // Espera 10ms antes de aplicar o movimento
    } else {
        menu.style.transition = 'transform 0.5s ease-in-out';
        menu.style.transform = 'translateX(-50px)';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 500); // Espera a animação acabar para esconder
    }
}
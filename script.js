const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

// TOOGLE OPEN/ CLOSE MENU
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});
// SLIDER
const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.slider-img');
const overlay = document.querySelector('.overlay');
const anim = document.querySelector('.anim');

// GET THE CSS VARIABLES FROM ROOT
const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

// IMAGE PATHS
const images = [
    './image/construfor.png',
    './image/gesso2.jpg',
    './image/gesso3.jpg',
    './image/gesso4.jpg',
    './image/gesso5.jpg',
];

// THEME COLORS 
const colors = [
    '#feb57b',
    '#ffa901',
    '#b5162e',
    '#27223f',
    '#468cc2',
];

function retrigAnim() {

    for (let i = 0; i < anim.length; i++) {
        anim[i].style.animation = 'none';
        anim[i].offsetHeight;
        anim[i].style.animation = null
    }
}

function slider(i) {
    retrigAnim();
    img.src = images[i]
    r.style.setProperty('--accent', colors[i]);
    for (let i = 0; i < pag.length; i++) {
        pag[i].classList.remove('active');
    }
    pag[i].classList.add('active');
}

for (let i = 0; i < pag.length; i++) {
    pag[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide()
    });
}

prev.addEventListener('click', () => {
    id--;
    if (id < 0) {
        id = pag.length - 1;
    }
    slider(id);
    stopAutoSlide();
});

next.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
});

function nextSlide() {
    id++;
    if (id > pag.length - 1) {
        id = 0;
    }
    slider(id);
}

let autoSlide = setInterval(nextSlide, 10000);
function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 10000);
}



const button_projeto = document.querySelector("#btn_open_projetos")
const modal_projeto = document.querySelector("#modal_projeto")
const buttonCLoseProjeto = document.querySelector("#modal_close_projeto")

button_projeto.onclick = function () {
    modal_projeto.showModal()
}

buttonCLoseProjeto.onclick = function () {
    modal_projeto.close()
}



const button_contato = document.querySelector("#btn_open_contato")
const modal_contato = document.querySelector("#modal_contato")
const buttonCloseContato = document.querySelector("#modal_close_contato")


button_contato.onclick = function () {
    modal_contato.showModal()
}

buttonCloseContato.onclick = function () {
    modal_contato.close()
}


const button_sobre = document.querySelector("#btn_open_sobre")
const modal_sobre = document.querySelector("#modal_sobre")
const buttonCloseSobre = document.querySelector("#modal_close_sobre")

button_sobre.onclick = function () {
    modal_sobre.showModal()
}

buttonCloseSobre.onclick = function () {
    modal_sobre.close()
}
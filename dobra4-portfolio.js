// const dobra = document.querySelector('.dobra4-B');
// const images = dobra.querySelectorAll('img');
// images[0].style.display = 'block'

// const desktopButton = document.getElementById('desktopButton');
// const mobileButton = document.getElementById('mobileButton')

// desktopButton.addEventListener('click', function() {
//     mostrarImagensDesktop();
// })

// mobileButton.addEventListener('click', function() {
//     mostrarImagensMobile();
// })

// const setaEsquerda = document.querySelector('.seta-esquerda');
// const setaDireita = document.querySelector('.seta-direita');

// setaEsquerda.addEventListener('click', function() {
//     scrollLeft();
// })

// setaDireita.addEventListener('click', function() {
//     scrollRight();
// })

// function scrollRight() {
//     for (let i = 0; i < images.length - 1; i++) {
//         const imageStyle = window.getComputedStyle(images[i]);
//         if (imageStyle.getPropertyValue('display') === 'block' && images[i+1]) {
//             images[i].style.display = 'none';
//             images[i+1].style.display = 'block';
//             return;
//         } else {
//             images[i].style.display = 'none';
//         }
//     }
// }

// function scrollLeft() {
//     for (let i = 0; i < images.length; i++) {
//         const imageStyle = window.getComputedStyle(images[i]);
//         if (imageStyle.getPropertyValue('display') === 'block' && images[i] != images[0]) {
//             images[i].style.display = 'none';
//             images[i-1].style.display = 'block';
//             return;
//         } else {
            
//         }
//     }
// }

// function mostrarImagensMobile() {
//     for (let i = 0; i < images.length; i++) {
//         images[i].src = 'images/templates/template' + (i) + '-mobile.jpg';
//     }
// }

// function mostrarImagensDesktop() {
//     for (let i = 0; i < images.length; i++) {
//         images[i].src = 'images/templates/blender-template' + (i) + '.png';
//     }
// }

const sitesIframe = document.getElementById('sites-iframe');

let siteCounter = 0; // para usar como index no array de sites

let sinalizador = 0;
    // 0 = advocacia;
    // 1 = psicoterapia;


document.addEventListener("DOMContentLoaded", function (){
    mostrarSites('adv');
});

function mostrarSites(ramo) {
    if (ramo === 'adv') {
        siteCounter = 0;
        sitesIframe.src = sitesAdv[siteCounter]
        sinalizador = 0;
        

    } else if (ramo === 'ter') {
        siteCounter = 0;
        sitesIframe.src = sitesTer[siteCounter]
        sinalizador = 1;
        

    }
}

const advButton = document.getElementById('advButton');
const terButton = document.getElementById('terButton');

advButton.addEventListener('click', function() {
    mostrarSites('adv');
    
})

terButton.addEventListener('click', function() {
    mostrarSites('ter')
})

const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

setaDireita.addEventListener('click', function () {
    avançarDireita();
})

function avançarDireita() {
    if (sinalizador === 0) { // para sites de advocacia
        if (sitesAdv[(siteCounter+1)])
            siteCounter ++;
            sitesIframe.src = sitesAdv[siteCounter];
    } else if (sinalizador === 1) { // para sites de terapia
        if (sitesTer[(siteCounter+1)])
            siteCounter ++;
            sitesIframe.src = sitesTer[siteCounter];

    } // adicionar novos else if para novos ramos
}

setaEsquerda.addEventListener('click', function () {
    retornarEsquerda();
})

function retornarEsquerda() {
    if (sinalizador === 0) { // para sites de advocacia
        if (sitesAdv[(siteCounter-1)])
            siteCounter --;
            sitesIframe.src = sitesAdv[siteCounter];
    } else if (sinalizador === 1) { // para sites de terapia
        if (sitesTer[(siteCounter-1)])
            siteCounter --;
            sitesIframe.src = sitesTer[siteCounter];

    } // adicionar novos else if para novos ramos
}
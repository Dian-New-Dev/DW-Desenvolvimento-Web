const sitesIframe = document.getElementById('sites-iframe');

let siteCounter = 0; // para usar como index no array de sites

let sinalizador = 0;
    // 0 = advocacia;
    // 1 = psicoterapia;


document.addEventListener("DOMContentLoaded", function (){
    mostrarSites('ter');
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
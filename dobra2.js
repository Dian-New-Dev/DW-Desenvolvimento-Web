const divDosBotoes = document.querySelector('.dobra2-h3');
const botoes = divDosBotoes.querySelectorAll('h3');
const info = document.querySelectorAll('.hidden-text');
info[0].style.display = 'flex'
info[1].style.display = 'none'
info[2].style.display = 'none'

const infoMobile = document.querySelectorAll('.hidden-text-mobile');
infoMobile[0].style.display = 'block'
infoMobile[1].style.display = 'none'
infoMobile[2].style.display = 'none'

for (let i = 0; i < 3; i++) {
    botoes[i].addEventListener('click', function() {
        exibirInfo(info[i]);
        exibirInfoMobile(infoMobile[i]);
    })
}

function exibirInfo(informacao) {
    for (let i = 0; i < 3; i++) {
        if (info[i] === informacao) {
            info[i].style.display = 'flex';
            botoes[i].classList.add('dobra2-h3-clicked');
            botoes[i].classList.remove('dobra2-h3-not-clicked');
        } else {
            info[i].style.display = 'none';
            botoes[i].classList.add('dobra2-h3-not-clicked');
            botoes[i].classList.remove('dobra2-h3-clicked');
        }
    }
}

function exibirInfoMobile(informacao) {
    for (let i = 0; i < 3; i++) {
        if (infoMobile[i] === informacao) {
            infoMobile[i].style.display = 'block';
            botoes[i].classList.add('dobra2-h3-clicked');
            botoes[i].classList.remove('dobra2-h3-not-clicked');
        } else {
            infoMobile[i].style.display = 'none';
            botoes[i].classList.add('dobra2-h3-not-clicked');
            botoes[i].classList.remove('dobra2-h3-clicked');
        }
    }
}

/////////////////////////////////////////////////////////

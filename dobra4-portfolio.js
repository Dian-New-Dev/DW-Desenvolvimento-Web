const dobra = document.querySelector('.dobra4-B');
const images = dobra.querySelectorAll('img');
images[0].style.display = 'block'

const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

setaEsquerda.addEventListener('click', function() {
    scrollLeft();
})

setaDireita.addEventListener('click', function() {
    scrollRight();
})

function scrollRight() {
    for (let i = 0; i < images.length - 1; i++) {
        const imageStyle = window.getComputedStyle(images[i]);
        if (imageStyle.getPropertyValue('display') === 'block' && images[i+1]) {
            images[i].style.display = 'none';
            images[i+1].style.display = 'block';
            return;
        } else {
            images[i].style.display = 'none';
        }
    }
}

function scrollLeft() {
    for (let i = 0; i < images.length; i++) {
        const imageStyle = window.getComputedStyle(images[i]);
        if (imageStyle.getPropertyValue('display') === 'block' && images[i] != images[0]) {
            images[i].style.display = 'none';
            images[i-1].style.display = 'block';
            return;
        } else {
            
        }
    }
}

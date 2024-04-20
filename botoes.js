const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', function() {
        mouseEntrou(buttons[i]);
    })
}

function mouseEntrou(botao) {
    botao.style.transform = 'scale(1.05)';
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseleave', function() {
        mouseSaiu(buttons[i]);
    })
}

function mouseSaiu(botao) {
    botao.style.transform = 'scale(1)';
}
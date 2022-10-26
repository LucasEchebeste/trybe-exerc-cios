//1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudaTexto(frase) {
    const p = document.getElementsByTagName('p')[1];
    p.innerText = frase

    return frase
}

mudaTexto("Daqui 2 anos serei um desenvolvedor full stack que ganhará muito bem");

//2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudaCor(cor) {
    const container = document.getElementsByClassName('main-content')[0];
    container.style.backgroundColor = cor;

}

mudaCor('rgb(76,164,109)');

//3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function mudaQuadro (cor) {
    const centerContent = document.getElementsByClassName('center-content')[0];
    centerContent.style.backgroundColor = cor
    
}

 mudaQuadro('white');

// 4. Crie e execute uma função que corrija o texto da tag <h1>.

function corrijaTexto () {
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = "Exercício - JavaScript"
}

corrijaTexto();

//5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

function mudaParagrafo () {
const paragrafo = document.getElementsByTagName('p')[0];
paragrafo.innerText = "Texto padrão do nosso site"
paragrafo.innerText = paragrafo.innerText.toUpperCase()

}

mudaParagrafo();

//6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function exibeParagrafos () {
let paragrafos = document.getElementsByTagName('p');
for (let i = 0; i < paragrafos.length; i += 1) {
    paragrafos[i].innerText = 'Lucas Echebeste';
}

}

exibeParagrafos();


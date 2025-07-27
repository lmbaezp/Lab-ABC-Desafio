const btnClaros = document.getElementById('btnClaros');
const btnOscuros = document.getElementById('btnOscuros');
const btnInicial = document.getElementById('btnInicial');
const letra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q'];
const texto = ['Á R B O L', 'B A L Ó N', 'C A R R O', 'D E L F Í N', 'E S T R E L L A', 'F L O R', 'G A T O', 'H U E V O','I G U A N A',
                'J U G O', 'K I W I', 'L Á P I Z', 'M A N O', 'N U B E S', 'P I Ñ A', 'O S O', 'P A T O', 'Q U E S O'];
const colorInicial = ['#82FF9E', '#A9FBC3','#002500'];
const coloresClaros = [
                        ['#8A4FFF','#C3BEF7','#474350'],
                        ['#F93943','#FF674D', '#ffffff'],
                        ['#E2C044','#FFEC51', '#4D4847'],
                        ['#ED6B86','#FAB3A9','#2D1E2F'],
                    ];
const coloresOscuros = [
                        ['#313715','#939F5C','#E2F9B8'],
                        ['#03045E','#0077B6','#FBFCFF'],
                        ['#45050C','#6E0D25','#FFFFB3'],
                        ['#004346','#2D898B','#09BC8A'],
                    ];

document.addEventListener("DOMContentLoaded", function () {

    for (let i = 0; i < letra.length; i++) {

        const container = document.getElementById('main');
        const card = document.createElement('div');
        card.classList.add('flip-card');
        container.appendChild(card);
        const cardInner = document.createElement('div');
        cardInner.classList.add('flip-card-inner');
        card.appendChild(cardInner);
        const cardFront = document.createElement('div');
        cardFront.classList.add('flip-card-front');
        cardInner.appendChild(cardFront);
        const letterFront1 = document.createElement('h2');
        letterFront1.classList.add('fredoka-600');
        letterFront1.classList.add('letter-front');
        letterFront1.textContent = letra[i];
        cardFront.appendChild(letterFront1);
        const letterFront2 = document.createElement('h2');
        letterFront2.classList.add('fredoka-600');
        letterFront2.classList.add('letter-front');
        letterFront2.textContent = letra[i].toLowerCase();
        cardFront.appendChild(letterFront2);
        const cardBack = document.createElement('div');
        cardBack.classList.add('flip-card-back');
        cardInner.appendChild(cardBack);
        const imgBack = document.createElement('img');
        imgBack.src = `img/${i+1}.png`;
        imgBack.alt = texto[i];
        cardBack.appendChild(imgBack);
        const divBack = document.createElement('div');
        cardBack.classList.add('text-back');
        cardBack.appendChild(divBack);
        const divBackText1 = document.createElement('h1');
        divBackText1.classList.add('short-stack-regular');
        divBackText1.textContent = texto[i];
        cardBack.appendChild(divBackText1);
        const divBackText2 = document.createElement('h1');
        divBackText2.classList.add('short-stack-regular');
        divBackText2.textContent = texto[i].toLowerCase();
        cardBack.appendChild(divBackText2);
    }

});

/* <div div class="flip-card" >
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <h1 class="fredoka-600 letter-front">A</h1>
            <h1 class="fredoka-600 letter-front">a</h1>
        </div>
        <div class="flip-card-back">
            <img src="img/arbol.png" alt="Avatar">
                <div class="text-back">
                    <h1 class="short-stack-regular">Á R B O L</h1>
                    <h1 class="short-stack-regular">á r b o l</h1>
                </div>
        </div>
    </div>
</div > */

btnClaros.addEventListener('click', function() {
    const colorSelecc = coloresClaros[Math.floor(Math.random() * Object.keys(coloresClaros).length)];
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        let cardInner = card.childNodes[0];
        let cardFront = cardInner.childNodes[0];
        cardFront.style.backgroundColor = colorSelecc[0];
        cardFront.style.color = colorSelecc[2];
        cardInner.style.border = `10px solid ${colorSelecc[1]}`;    
    });   
});

btnOscuros.addEventListener('click', function() {
    const colorSelecc = coloresOscuros[Math.floor(Math.random() * Object.keys(coloresOscuros).length)];
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        let cardInner = card.childNodes[0];
        let cardFront = cardInner.childNodes[0];
        cardFront.style.backgroundColor = colorSelecc[0];
        cardFront.style.color = colorSelecc[2];
        cardInner.style.border = `10px solid ${colorSelecc[1]}`;    
    });   
});

btnInicial.addEventListener('click', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        let cardInner = card.childNodes[0];
        let cardFront = cardInner.childNodes[0];
        cardFront.style.backgroundColor = colorInicial[0];
        cardFront.style.color = colorInicial[2];
        cardInner.style.border = `10px solid ${colorInicial[1]}`;    
    });   
});
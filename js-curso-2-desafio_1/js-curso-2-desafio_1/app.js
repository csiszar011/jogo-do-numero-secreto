let tituloDesafio = document.querySelector('h1');
tituloDesafio.innerHTML = 'Hora do desafio!';

function cliqueBotao() {
    console.log('O botão foi clicado!');
}

function alertaBotao() {
    alert('Eu amo JS')
}

function nomeCidade() {
    let cidade = prompt('Diga o nome de sua cidade favorita:');
    alert(`Estive em ${cidade} e lembrei de vocë.`);
}

function somaNumeros() {
    let numero1 = parseInt(prompt('Digite um número:'));
    let numero2 = parseInt(prompt('Digite mais um número:'));
    let resultado = numero1 + numero2;
    alert(`A soma de ${numero1} e ${numero2} é ${resultado}!`);
}


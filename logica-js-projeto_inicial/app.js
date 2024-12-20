alert('Boas vindas ao jogo do número secreto!');
numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

//enquanto o chute nao for igual ao ns
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao ns
    if (chute == numeroSecreto) {
        break; // para a repeticao caso chute == numeroSecreto
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++; // tentativas + 1 (para atriibuir +1, utilizar o sinal "++;")
    }
}

let palavraTetntativa = tentativas > 1 ? 'tentativas' : 'tentativa' // operador ternário: tentativas maior que 1? se sim, tentativas, senao, tentativa
alert(`Parabéns! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTetntativa}.`);


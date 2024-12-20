//desafio1

//function calcularIMC(altura, peso) {
//    let imc = peso / (alturaMetros * alturaMetros);
//}

//desafio2

//function calcularFatorial(numero) {
    //if (numero === 0 || numero === 1) {
      //  return 1;
    //}

    //let fatorial = 1;
    //for (let i = 2; i <= numero; i++) {
    //    fatorial *+ i;
    //}
    //return fatorial;
//}

//let numero = 5;
//let resultado = calcularFatorial(numero);
//console.log(`O fatorial de ${numero} é ${resultado}`);

//desafio 3

//function converterDolarParaReal(valorEmDolar) {
//    let cotacaoDolar = 4.80;
//    let valorEmReais = valorEmDolar * cotacaoDolar;
//    return valorEmReais.toFixed(2);
//}

//let valorEmDolar = 50;
//let valorEmReais = converterDolarParaReal(valorEmDolar);
//console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}.`);

//desafio 4

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Area da sala: ${area} metros quadrados`);
    console.log(`Perimetro da sala: ${perimetro} metros`);
}

let altura = 3;
let largura = 5;
calcularAreaPerimetroSalaRetangular(altura, largura);

//desafio 5

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Area da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

let raio = 4 
calcularAreaPerimetroSalaCircular(raio);

// desafio 6

function tabuada(numero) {
   for (let i = 1; i < 10; i++) { //for é a estrutura de repetiçao, começando em 1, indo ate 10 e contando de 1 em 1
    let resultado =  numero * i;// define o resultado como numero escolhido vezes cada numero de 1 a 10
    console.log(`${numero} x ${i} = ${resultado}`); //printa no console as informaçoes
   }
}

let numero = 5;
tabuada(numero);
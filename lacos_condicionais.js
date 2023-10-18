//laços condicionais

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero vc escolhe?'))

while (numero !== numero_sorteado){
    console.log('vc errou o numero, tente novamente...')

    numero = Number(input.question('qual numero vc escolhe?'))
}

console.log('vc acertou!')
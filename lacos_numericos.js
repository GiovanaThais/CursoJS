const input = require('readline-sync')

for(let i=0; i<8; i++){
    console.log('repetição', i)
}
for(let i = 10; i>8; i--){
    console.log('repetição', i)
}
let nota;
let soma = 0;

for(let i=1; i<=3; i++){
    nota = Number(input.question(`informe a nota ${i} do aluno: `))
    soma = soma + nota
}
console.log(`A media do aluno é ${soma/3}`)
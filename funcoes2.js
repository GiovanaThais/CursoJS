//definindo função
function saudacao(){
    console.log('olá , seja bem vindo')
}

saudacao()

//parametros
function saudacao(nome){
    console.log(`olá ${nome} , seja bem vindo`)
}

saudacao('Giovana')

//retorno da funçao
function soma(numero1, numero2){
    return numero1+numero2
}
const result = soma(10,29)

console.log(result)

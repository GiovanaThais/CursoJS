const numero = 10

console.log(numero, typeof numero)

const numeroParaString = String(numero)

console.log(numeroParaString, typeof numeroParaString)

console.log(Number("123431"))
console.log(parseInt("121212.99"))

//coerção Implicita
console.log('10' + 1)
console.log('10' - 2)

let n = 1 +'1' //11

console.log(n = n - 1) //10
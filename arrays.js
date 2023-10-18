let arr = [] //criando um array vazio
let array = ['v', 1 , 4, true]

console.log('primeiro', array[0])
console.log('quantidade:', array.length)

for(let i=0; i<array.length; i++){
    console.log(array[i])
}

for(let elemento of array){
    console.log(elemento)
}
for(let indice in array){
    console.log(indice)
}
//funçoes começa com Letra maiuscula

let arr1 = [30,12,45,34,29]
let arr2 = []
//fatiamento
console.log(arr1.slice(0,2))
console.log(arr1.slice(2))

//add elementos no final : push

console.log('array antes de add elementos:', arr2)
arr2.push(10, 20)
console.log('depois de add:', arr2)

//add elementos no inicio: unshift
arr2.unshift(0)
console.log('add com unshift: ', arr2)

//removendo o ultimo elemento
arr2.pop()
console.log(arr2)
//removendo o primeiro elemento
arr2.shift()
console.log(arr2)

//concatenando
console.log(arr1.concat(arr2))

//buscando elementos pelo index
console.log(arr1.indexOf(30)) //se n existe retorna -1

console.clear()
//descobrindo a existencia do elemento no array
console.log(arr1.includes(10))

//invertendo arrays
console.log(arr1.reverse())
const pilotos = new Array('Vettel', 'Alonso', 'Senna', 'Barrichello')
console.log(pilotos)

pilotos.pop() // remove o ultimo elemento do array

console.log(pilotos)

pilotos.push('Fitipaldi')
console.log(pilotos)

pilotos.shift() // remove o 1° elemento

console.log(pilotos)

pilotos.unshift('Hamilton') // add no inicio

console.log(pilotos)

pilotos.splice(2,0, 'Shwmachker', 'Mansel')

console.log(pilotos)

pilotos.splice(1,1) // remove o Alonso

console.log(pilotos)

let algunsPilotos = pilotos.slice(2) /*método slice() retorna um novo array com os elementos 
                                     do array original apartir do indice informado*/

console.log(algunsPilotos)   

const algunsPilotos2 = pilotos.slice(1,4) /* slice(1,4) retorna do indice 1 até 4 mas o elemento 
da posição 4 não é retornado */
 console.log(algunsPilotos2)                                               


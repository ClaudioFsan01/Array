const nums = [1,2,3,4,5]

//For com Proposito
/* Com a função map podemos mapear os dados de um array para um outro array 
de mesmo tamanho porem com os dados transformados. Pra isso passamos para seu parametro
uma função callback com até 3 parametros sendo : o valor atual, index e um array.  
OBs : A função map não transforma o array original mas cria um novo array. */

let nums2 = nums.map(function (e){
 return e*2
})

console.log(nums2)

// criando 3 funções 

const soma10 = e=> e + 10

const triplo = e=> e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 
/*parseFloat(e) converte a String em um tipo float
toFixed() numero de digitos depois do ponto decimal 
replace('','') substitui a 1° string pela segunda , nesse caso o ponto pela virgula  */
/*
const numsSoma10 = nums2.map(soma10)
console.log(numsSoma10)

const numsTriplo = numsSoma10.map(triplo)

console.log(numsTriplo)

const numsParaDinheiro = numsTriplo.map(paraDinheiro)

console.log(numsParaDinheiro)
*/

// ou 

const resultado = nums2.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)

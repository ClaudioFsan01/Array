/* Array em javascript (quando instanciado é criado um objeto do tipo Array) mas 
 mas como tudo em javascript Array é função.
*/
// Estrutura dinâmica que pode aumentar e diminuir o seu tamanho

/* Por javascript ser uma linguagem fracamente tipada um Array pode
 é heterogenio , pode manipular valores de tipos diferentes.
 A boa pratica requer que trabalhemos com dados do mesmo tipo no Array.

 */

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Carlos', 'Maria', 'João')

console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

/*Fromas válidas de inserir novos elementos no Array */
aprovados[4] = 'Marta' // Mais recomendado quando for mudar o valor na posição
console.log(aprovados[4])
aprovados.push('Jonas') // Mais recomendad

//console.log(aprovados) 

aprovados[9] ='Lucas' /* Das posições  6 até 8 ficam como undefined mas são validas */

console.log(aprovados)
console.log(aprovados.length) 


aprovados.sort() // ordena o Array (causando a alteração diretamente no Array). Alguns métodos retorna um novo Array

console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) //undefined
/*Mesmo excluindo um elemento do Array o mesmo não é reordenado */
console.log(aprovados[2])

// novo Array

 aprovados = new Array('Betinh', 'Luizinho', 'Paulinho')

console.log(aprovados)

/* método splice podemos adicionar, remover ou (remover e adicionar "ao mesmo tempo") elementos no Array 
apartir de um determinado indice.
 */

// removendo
//aprovados.splice(1,2) /*informar o indice e a quantidade que será removida do Array apartir do indice. */

//console.log(aprovados)

//adicionando elementos no Arrray com splice
/*informar o indice e a quantidade de elementos que serão adicionado(s) no Array apartir do indice 
e passar os elementos em questao. ex: */

aprovados.splice(1,0,'mae', 'pai') /* Apartir do indice 1, excluindo 0 element, e add 2*/

console.log(aprovados)


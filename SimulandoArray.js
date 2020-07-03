//Simulando Array com Objeto

const quaseArray = {0: 'Ana', 1: 'Bia', 2: 'Lia'}

console.log(quaseArray)

console.log(typeof quaseArray)

/* A seguir estou adicionando o atributo ToString no objeto
quaseArray e criei um objeto que vai representar todos os atributos do atributo ToString. 
O atributo ToString será uma função. 
Object.values(this) vai imprimir os valores do objeto atual

A função  poderia ser adicionada diretamente dentro do Array  quaseArray mas queremos 
que ela seja uma função não enumerada.
*/
Object.defineProperty(quaseArray, 'ToString',{
   value : function (){return Object.values(this)},
   enumerable: false // assim a função não aparece no resultado final
})

console.log(quaseArray[0]) // Em javascript com Objeto tambem podemos acessar os atributos por indice

const meuArray = ['Ana', 'Bia','Lia']

console.log(quaseArray.ToString(), meuArray)






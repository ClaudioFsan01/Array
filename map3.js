Array.prototype.map2 = function(callback){
    const newArray =[]
 for(let i=0; i< this.length; i++){
    newArray.push(callback(this[i], i, this))
 }

 return newArray
}

/* Acima foi inserido o atributo map2 no prototipo da função Array,
à esse atributo foi atribuido uma função , ou seja, map2 é uma função.
Essa função map2 recebe no seu parametro uma função callback. No bloco de instrução
da função map2 é criado um novo array vazio e em seguida o for percorre todos os elementos do 
array original apontado pela palavra this. A função callback é chamada pra cada elemento do array original 
recebendo em seu parametro cada elemento do array original, indice atual e o array original. O resultado 
de cada retorno (o novo elemento) é adicionado com a função push no novo array.
Ao final esse novo array é retornado. */


//inserindo elementos em formato jason no Array
// desafio : retornar um novo array que contem somente os preços

const carrinho = ['{"nome": "Borracha", "preco": 1.00}',
                 '{"nome": "Lapis", "preco": 2.00}',
                 '{"nome": "Apontador", "preco": 2.50}']


  
  
  const paraObjeto = json => JSON.parse(json)  //1° converte jason para objeto


const carrinhoObjetos = carrinho.map2(paraObjeto) // 2° função map percorre o array chamando a função paraObjeto pra cada elemento 

console.log(carrinhoObjetos)

const apenasPrecos = produto=>produto.preco // 3° A função apenasPrecos recebe o objeto e retorna o atributo preço desse objeto

const carrinhoPrecos= carrinhoObjetos.map2(apenasPrecos) // 4° A função map perrcorre o array carrinhoObjetos e chama pra cada elemento a função apenasPrecos 

console.log(carrinhoPrecos)


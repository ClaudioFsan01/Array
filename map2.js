//inserindo elementos em formato jason no Array
// desafio : retornar um novo array que contem somente os preços

const carrinho = ['{"nome": "Borracha", "preco": 1.00}',
                 '{"nome": "Lapis", "preco": 2.00}',
                 '{"nome": "Apontador", "preco": 2.50}']


  
  
  const paraObjeto = json => JSON.parse(json)  //1° converte jason para objeto


const carrinhoObjetos = carrinho.map(paraObjeto) // 2° função map percorre o array chamando a função paraObjeto pra cada elemento 

console.log(carrinhoObjetos)

const apenasPrecos = produto=>produto.preco // 3° A função apenasPrecos recebe o objeto e retorna o atributo preço desse objeto

const carrinhoPrecos= carrinhoObjetos.map(apenasPrecos) // 4° A função map perrcorre o array carrinhoObjetos e chama pra cada elemento a função apenasPrecos 

console.log(carrinhoPrecos)


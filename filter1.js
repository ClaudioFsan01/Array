//https://developer.mozilla.org/
/*O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
Parâmetros : callback 
Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, 
false caso contrário, recebendo três argumentos:
element
O elemento que está sendo processado no array.

index
O índice do elemento atual que está sendo processado no array.
array
O array para qual filter foi chamada.

thisArg Optional
Opcional. Valor a ser usado como this durante a execução do callback.

*/


const produtos = [{nome: 'NotBook', preco: 4000, fragil: true},
                   {nome: 'Smartfone', preco: 2000, fragil: true},
                   {nome: 'Ipad Pro', preco: 3600, fragil: false},
                    {nome: 'Copo vidro', preco: 20, fragil: true},
                    {nome: 'Copo plastico', preco:10, fragil: false}]

                    const verifPreco  = function (e) {  
                        return e.preco>=1000                    
                    }

                    const verifFragil = function (e){
                        return e.fragil // retorna o elemento caso fragil seja igual a true
                    }

                   let newArray = produtos.filter(verifPreco).filter(verifFragil)

                   //let Arrayfragil = produtos.filter(verifFragil)

                    console.log(newArray)
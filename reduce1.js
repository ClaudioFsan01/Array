//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

/*O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, 
resultando num único valor de retorno. 

A função reducer é alimentada por quatro parâmetros:

Acumulador (acc)
Valor Atual (cur)
Index Atual (idx)
Array original (src)
O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador,
 com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, 
 se tornará o valor resultante, único, final.

*/


const alunos = [{nome :'Claudio', nota : 8.5, bolsista : false},
                {nome : 'Fatima', nota : 9.2, bolsista : false},
                {nome : 'Carlos', nota : 7.5, bolsista : true},
                {nome : 'João', nota : 6.5, bolsista : true}]


                console.log(alunos.map(e => e.nota))

                const resultado = alunos.map(e=>e.nota).reduce(function (acumulador, valorAtual){
                    console.log(acumulador + valorAtual)
                    return acumulador + valorAtual
                 }, 10)

                    console.log(resultado)


                    /* A função reduce percorre os elementos do array ao qual foi chamada, 
                    a função reduce recebe em seu parametro uma função callback,
                    passando para essa função callback o elemento atual que na 1° rodada 
                    é o segundo elemento do array e o acumulador que nessa 1° rodada é 
                    o primeiro elemento(caso nenhum valor inicial seja passado), porem se um valor 
                    inicial seja passado esse será o valor inicial do acumulador. Apartir da 2° 
                    rodada o elemento atual passa a ser  o terceiro elemento do array e o acumulador
                     recebe o resultado da soma dos dois elementos anteriores. 
                     
                     OBS:

                     callback : Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial
                     for passado); recebe quatro argumentos: acumuladorO valor retornado na última invocação do callback, 
                     ou o argumento valorInicial, se fornecido.

                     valorInicial Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função 
                     callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor 
                     inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor 
                     inicial retornará um erro.
                     
                     */
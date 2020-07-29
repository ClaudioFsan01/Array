/*desafio 1 : Criar uma função reduce que percorrer todos os elementos do array
  e verifica se todos os alunos são bolsistas.

  desafio 2 : Criar uma função reduce que percorrer todos os elementos do array
  e verifica se existe aluno bolsista
*/
Array.prototype.reduce2 = function(callback, valorInicial){
 
    for(let i=0; i<this.length; i++){
        if(callback(this[i])!= true){
            return false
        }      
    }

    return true

}

Array.prototype.reduce3 = function(callback, valorInicial){
 
    for(let i=0; i<this.length; i++){
        if(callback(this[i])!= false){
            return true
        }      
    }

    return false

}

const alunos = [{nome :'Claudio', nota : 8.5, bolsista : true},
                {nome : 'Fatima', nota : 9.2, bolsista : false},
                {nome : 'Carlos', nota : 7.5, bolsista : false},
                {nome : 'João', nota : 6.5, bolsista : false}]

const verifBolsista = function (e){return e.bolsista}


let resultado = alunos.reduce2(verifBolsista)
if(resultado){
    console.log('Todos os alunos são bolsistas')
}
else{
    console.log('Existe aluno que não é bolsistas')
}


resultado = alunos.reduce3(verifBolsista)

if(resultado){
    console.log('Existe aluno bolsista')
}else{
    console.log('Não existe aluno bolsista')
}

// ou


//Desafio 1 : todos os alunos são bolsistas ?

const todosBoslsitas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a=>a.bolsista)).reduce(todosBoslsitas)

const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a=>a.bolsista)).reduce(algumBolsista)

/*
A função map percorre todos os elementos do array original alunos chamando para cada elemento uma função callback
criando assim um novo array com todos elementos que passaram nesse filtro(retorno igual true). 
Em seguida a função reduce(que recebe os parametros : callback e um valor inicial(não obrigatorio))
 percorre todos elementos desse novo array chamando essa função callback
para cada um desses elementos. Essa função callback chamada pela reduce recebe os seguintes parametros :
acumulador, elementoAtual, index(não obrigatorio) e o array atual(não obrigatorio), essa callback apenas 
retorna um resultado que será atribuido ao acumulador na proxima rodada. 

OBS : Caso a função reduce tenha recebido como 2° argumento um valor inicial esse valor será atibuido 
ao 1° parametro da callback (parametro acumulador). Caso contrario, o 2° parametro da callback 
(que é o elemento atual do array) recebera o 2° elemento do vetor e o 1° elemento do vetor será atribuido 
ao acumulador na 1° rodada e somente apartir da 2° rodada que o retorno dessa callback será atribuido ao acumulador
que é o 1° parametro da callback .
*/

// Desafio 2 : Algum aluno é bolsistas ?







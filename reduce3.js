// desafio 1 : criar a função reduce sem receber o valor inicial 
// desafio 2 : criar a função reduce recebendo o valor inicial 

// sem receber o valor inicial 
Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i=1; i< this.length; i++){
       acumulador = callback(acumulador, this[i], i, this)
    }
  return acumulador
}

//recebendo o valor inicial

Array.prototype.reduce3 = function(callback, valorInicial){
    let acumulador
    if(valorInicial)
         acumulador = valorInicial +this[0]
    else
         acumulador = this[0]
       
    for(let i=1; i< this.length; i++){
       acumulador = callback(acumulador, this[i], i, this)
    }
  return acumulador
}


const somaElementos = function (acumulador, valorAtual, index, array){
  return valorAtual + acumulador
} 



const alunos = [{nome :'Claudio', nota : 8.5, bolsista : true},
                {nome : 'Fatima', nota : 9.2, bolsista : false},
                {nome : 'Carlos', nota : 7.5, bolsista : false},
                {nome : 'João', nota : 6.5, bolsista : false}]

           // função map cria um novo array com as notas do array original alunos
           // função reduce2 percorre esse novo array que contem as notas 

                console.log(alunos.map(e=> e.nota).reduce3(somaElementos, 10))


 





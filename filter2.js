
//Array.prototype.filter

Array.prototype.filter2 = function (callback){
const newArray = []

for(let i=0; i< this.length; i++){
    if(callback(this[i], i, this)){ /* Se a função callback retornar true o elemento em questao será adicionado
       no novo Array */
        newArray.push(this[i])     
    }
    
}

return newArray;
}

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

                   const produtosFiltrados = produtos.filter2(verifPreco).filter2(verifFragil)

                   //let Arrayfragil = produtos.filter(verifFragil)

                    console.log(produtosFiltrados)

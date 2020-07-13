/* OBS : Uma vez que não existe no prototipo de Array a função forEach2 podemos 
ir em Array.prototype para incluir essa função.*/

Array.prototype.forEach2= function (callback){
for(let i=0; i< this.length; i++){ //palavra this aponta para o Array atual 
    callback(this[i], i, this)
}
}


const aprovados = ['Claudio', 'Carlos', 'Eliseu']

aprovados.forEach2(function (nome, index, array)
{console.log(`${index+1}`, `${nome}`)
console.log(array)
})// A função forEach() chama uma função callback passando string, index e um array



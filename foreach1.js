const aprovados = ['Claudio', 'Carlos', 'Eliseu']

aprovados.forEach(function (nome, index)
{console.log(`${index+1}`, `${nome}`)
})// A função forEach() chama uma função callback passando string, index e um array

//aprovados.forEach(nome=> console.log(nome))

const exibirAprovados = nome=> console.log(nome)

aprovados.forEach(exibirAprovados)

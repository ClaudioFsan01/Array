const escola =[{ turma: 'TM1',
alunos:[{
    nome:'Gustavo', 
    nota: 8.1},
    
 {nome: 'Ana',
  nota: 9.2}]

}, 
{turma: 'TM2',
alunos:[{
    nome: 'Rebeca',
    nota: 8.9 
   },
    {
        nome: 'Roberto',
        nota: 7.3
    }
]

}]

// criando um Array com as notas de todos os alunos de todas as turmas

const getNotaDoAluno = aluno => aluno.nota
const getNotasdaTurma = turma=> turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasdaTurma)
console.log(notas1)

//console.log([].concat([8.1, 9.2], [8.9,7.3]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasdaTurma)
console.log(nota2)



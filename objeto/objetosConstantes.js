// pessoa ->  endMem -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> endMem2 -> {...}
//TypeError: Assignment to constant variable.
//pessoa = { nome: 'Ana' }


//tornando obj constante
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)



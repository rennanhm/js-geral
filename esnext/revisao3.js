// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))  // keys
console.log(Object.entries(obj))

// Melhorias na Notação Liteal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'latir'
    }
}

console.log(new Cachorro().falar())
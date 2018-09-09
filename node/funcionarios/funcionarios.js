const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const ehChines = funcionario => funcionario.pais === 'China'
const ehMulher = funcionario => funcionario.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    // mulher chinesa com menor salário
    const func = funcionarios
        .filter(ehChines)
        .filter(ehMulher)
        .reduce(menorSalario)
    console.log(func)
})
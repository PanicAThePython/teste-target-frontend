const prompt = require('prompt-sync')()
const numeroStr = prompt("Informe um número int...")
const numero = Number.parseInt(numeroStr)

if (numero === 0 || numero === 1){
    console.log("Está na sequência de fibonacci")
} else {
    const resultado = ehFibonacci(numero)
    if (resultado) console.log("Está na sequência de Fibonacci")
    else console.log("Não está na sequência de Fibonacci")
}

function ehFibonacci(num){
    let fibAtual = [0, 1, 1]
    let indexAtual = 2
    while (fibAtual[indexAtual] <= num){
        let soma = fibAtual[indexAtual] + fibAtual[indexAtual-1]
        fibAtual.push(soma)
        if (soma == num){
            return true
        }
        indexAtual+=1
    }
    return false
}
const prompt = require('prompt-sync')()
const palavra = prompt("Informe a string para inverter...")
let palavraInvertida = ""

let tamanhoPalavra = palavra.length

while (tamanhoPalavra > 0){
    palavraInvertida += palavra[tamanhoPalavra-1]
    tamanhoPalavra-=1
}

console.log(palavraInvertida)
const data = require('./dados.json')

function getMenorValorFaturamento(){
    let menor = 10000000000

    for (let i = 0; i < data.length; i ++){
        let valorDaVez = data[i]["valor"]
        if (valorDaVez < menor && valorDaVez !== 0){
            menor = valorDaVez
        }
    }
    return menor
}

function getMaiorValorFaturamento(){
    let maior = 0

    for (let i = 0; i < data.length; i ++){
        let valorDaVez = data[i]["valor"]
        if (valorDaVez > maior) maior = valorDaVez
    }
    
    return maior
}

function calcMediaFaturamento(){
    let total = 0
    let quantidadeFaturamentosValidos = 0

    for (let i = 0; i < data.length; i ++){
        let valorDaVez = data[i]["valor"]
        if (valorDaVez != 0){
            total+=valorDaVez
            quantidadeFaturamentosValidos+=1
        }
    }
    return total/quantidadeFaturamentosValidos
}

function getFaturamentosMaioresQueAMedia(){
    let listaMaiores = []
    for (let i = 0; i < data.length; i ++){
        let valorDaVez = data[i]["valor"]
        if (valorDaVez > mediaFaturamento) listaMaiores.push(valorDaVez)
    }

    return listaMaiores
}

console.log("menor valor: " + getMenorValorFaturamento())
console.log("maior valor: " + getMaiorValorFaturamento())
const mediaFaturamento = calcMediaFaturamento()
console.log("media: " + mediaFaturamento)
console.log("valores maiores que a media: \n" + getFaturamentosMaioresQueAMedia())
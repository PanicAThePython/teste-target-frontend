const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

const total = sp + rj + mg + es + outros

function percentualSP(){
    return ((sp/total)*100).toFixed(2)
}

function percentualRJ(){
    return ((rj/total)*100).toFixed(2)
}

function percentualMG(){
    return ((mg/total)*100).toFixed(2)
}

function percentualES(){
    return ((es/total)*100).toFixed(2)
}

function percentualOutros(){
    return ((outros/total)*100).toFixed(2)
}

console.log("SP " + percentualSP() + "%")
console.log("RJ " + percentualRJ() + "%")
console.log("MG " + percentualMG() + "%")
console.log("ES " + percentualES() + "%")
console.log("Outros " + percentualOutros() + "%")
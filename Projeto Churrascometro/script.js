// carne   -   400 gr por pessoa,  se for  + 6h 650 gr
// cerveja -   1200 ml por pessoa,  se for  + 6h 2000 ml
// refrigerante/água - 1000 ml por pessoa, se for  + 6h 1500 ml

//crianças valem 0.5 e não bebe cerveja.

// Pessoas que bebem cerveja 
// Pessoas que não bebem cerveja 

let inputAdultosQueBebem = document.getElementById("adultos_que_bebem");
let inputAdultosTotal = document.getElementById("adultos_total");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let bebemRefrigerante = (inputAdultosTotal-inputAdultosQueBebem) + inputCriancas;
let resultado = document.getElementById("resultado")

console.log(inputAdultosQueBebem.value,inputAdultosTotal.value,inputCriancas.value,inputDuracao.value)

function carneInd(duracao){
    if (duracao >= 6) {
        return 650;
    }else {
        return 400;
    }
}
function bebidasInd(duracao){
    if (duracao >= 6) {
        return 1000;
    }else {
        return 1500;
    }
}
function cervejaInd(duracao){
    if (duracao >= 6) {
        return 1200;
    }else {
        return 2000;
    }
}

function calcular(){
    console.log("calculando...")    
let adultos = inputAdultosTotal.value;
let criancas = inputCriancas.value;
let duracao = inputDuracao.value;
let adultosQueBebem = inputAdultosQueBebem.value;


    let qtdTotalCarne = adultos * carneInd(duracao) + (criancas * (carneInd(duracao) /2))
    let qtdCerveja = adultosQueBebem * cervejaInd(duracao);
    let qtdBebidas = (adultos - adultosQueBebem) * bebidasInd(duracao) +  (criancas * (bebidasInd(duracao) /2))

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja / 350)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdBebidas / 2000)} pets de refrigerante</p>`
}

console.log(inputAdultosQueBebem.value,inputAdultosTotal.value,inputCriancas.value,inputDuracao.value)

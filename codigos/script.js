// Pão de alho - 1/pesssoa + 6 hrs - 1,5
// Farofa - 100 g/pessoa + 6 hrs - 150 g
// Vinagrete - 200 g/pessoa + 6hrs - 275 g
// Arroz - 50g/pessoa + 6 hrs - 100 g
// Cerveja - 1200 ml/pessoa + 6hrs - 2000 ml
// Refrigerante/água - 1000 ml/pessoa + 6 hrs - 1500 ml

// Crianças valem por 0,5

let resultado = document.getElementById("resultado")

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


function calcular(){
    
    console.log("Carregando...");

    let adulto = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    qtdTotalPaoDeAlho = paoDeAlhoPP(duracao) * adulto + paoDeAlhoPP(duracao) * criancas / 2;
    qtdTotalFarofa = farofaPP(duracao) * adulto + farofaPP(duracao) * criancas / 2;
    qtdTotalvinagrete = vinagretePP(duracao) * adulto + vinagretePP(duracao) * criancas / 2;
    qtdTotalArroz = refrigerantePP(duracao) * adulto + refrigerantePP(duracao) * criancas / 2;
    qtdTotalCerveja = arrozPP(duracao) * adulto + arrozPP(duracao) * criancas / 2;
    qtdtotalRefri = refrigerantePP(duracao) * adulto + refrigerantePP(duracao) * criancas / 2;

    resultado.innerHTML += `<p>Pão de Alho:  ${qtdTotalPaoDeAlho} uni</p>`;
    resultado.innerHTML += `<p>Farofa:  ${Math.ceil(qtdTotalFarofa/1000)}kg</p>`;
    resultado.innerHTML += `<p>Vinagrete:  ${Math.ceil(qtdTotalvinagrete/1000)}kg</p>`;
    resultado.innerHTML += `<p>Refrigerante:  ${Math.ceil(qtdtotalRefri/1000)}L</p>`;
    resultado.innerHTML += `<p>Arroz: ${Math.ceil(qtdTotalArroz/1000)}kg</p>`;

}

function paoDeAlhoPP(duracao){
    if(duracao >= 6){
        return 1;
    }
    else{
        return 2;
    }
}
function farofaPP(duracao){
    if(duracao <= 6){
        return 100;
    }
    else{
        return 150;
    }
}
function arrozPP(){
    if(duracao <= 6){
        return 50
    }else{
        return 100;
    }
}
function vinagretePP(duracao){
    if(duracao <= 6){
        return 200;
    }
    else{
        return 275;
    }
}
function refrigerantePP (duracao){
    if(duracao <= 6){
        return 1000;
    }
    else{
        return 2000;
    }
}

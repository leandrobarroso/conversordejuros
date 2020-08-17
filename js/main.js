let taxaDeForm = document.querySelector("#taxaDe");
let periodoDeForm = document.querySelector("#periodoDe");
let taxaDe;
let periodoDe;
let taxaDeValida = false;

let taxaParaForm = document.querySelector("#taxaPara");
let periodoParaForm = document.querySelector("#periodoPara");
let taxaPara;
let periodoPara;

let botaoForm = document.querySelector("#calcula");

let form = document.querySelector(".main-form-");
form.reset();

let resultado;

const validaTaxaDe = () => {
    let aviso;

    taxaDe = taxaDeForm.value;

    if(isNaN(taxaDe)){
        taxaDeValida = false;  
        aviso = "Formato invÃ¡lido!";
        taxaParaForm.value = aviso;      
    } else {
        taxaDeValida = true;
        taxaParaForm.value = " ";      
    }    
}

const converte = () => {
    validaTaxaDe();

    if(taxaDeValida){
        taxaDe = taxaDeForm.value;
        periodoDe = periodoDeForm.selectedOptions[0].value;

        taxaPara = taxaParaForm.value;
        periodoPara = periodoParaForm.selectedOptions[0].value;

        if(periodoDe == periodoPara){
            resultado = parseFloat(taxaDe);
        }
        else if(periodoDe > periodoPara){
            resultado = ((1 + taxaDe/100) ** (1 / (periodoDe / periodoPara)) - 1) * 100;
        }
        else if(periodoDe < periodoPara){
            resultado = ((1 + taxaDe/100) ** (periodoPara / periodoDe) - 1) * 100;;
        }

        taxaParaForm.value = resultado.toFixed(4);
    }
}

form.onchange = converte;
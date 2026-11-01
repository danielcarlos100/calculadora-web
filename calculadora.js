let visor = document.querySelector(".visor");
console.log(visor);

visor.textContent = "0";
let botoes = document.querySelectorAll("button");
console.log(botoes);

let primeironumero = 0;
let operador = "";
let resultado = 0;
let segundonumero = 0;
for(let botao of botoes) {
botao.addEventListener("click", function() {


   if(botao.textContent === "C") {
   visor.textContent = "0";
   primeironumero = 0;
   segundonumero = 0;
   resultado = 0;
   operador = "";
   
   return;
   }

   if(botao.textContent === "+") {
   primeironumero = Number(visor.textContent);
   operador = botao.textContent;
   visor.textContent = "0";
   return;
    }

    if(botao.textContent === "-") {
    primeironumero = Number(visor.textContent);
    operador = botao.textContent;
    visor.textContent = "0";
    return;
    }

    if(botao.textContent === "*") {
    primeironumero = Number(visor.textContent);
    operador = botao.textContent;
    visor.textContent = "0";
    return;
    }

    if(botao.textContent === "/") {
    primeironumero = Number(visor.textContent);
    operador = botao.textContent;
    visor.textContent = "0";
    return;
    }

    if(botao.textContent === "=") {

    segundonumero = Number(visor.textContent);


    if(operador === "+") {
    resultado = primeironumero + segundonumero;

    }


    else if(operador === "-") {

    resultado = primeironumero - segundonumero;
    }

    else if(operador === "*") {

    resultado = primeironumero * segundonumero;
    }

    else if(operador === "/") {
    if(segundonumero != 0) {
    resultado = primeironumero / segundonumero;
    }
    
    else {
    visor.textContent = "Erro";
    return;
    }
    }


    visor.textContent = resultado;
    return;



}
  if(visor.textContent === "0") {
        visor.textContent = botao.textContent;
    }
    else {
        visor.textContent = visor.textContent + botao.textContent;
    }
});



}








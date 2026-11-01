
let opcao = 0;

function somar(nm1, nm2) {

return nm1 + nm2;

}

function subtrair(nm1, nm2) {

return nm1 - nm2;
}

function multiplicar(nm1, nm2) {

return nm1 * nm2;
}

function dividir(nm1, nm2) {
if(nm2 === 0) {
return "Não é permitido dividir números por 0";
}

return nm1 / nm2;
}


while (opcao != 5) {
    opcao = Number(prompt(
        "1 - Somar\n" +
        "2 - Subtrair\n" +
        "3 - Multiplicar\n" +
        "4 - Divisão\n" +
        "5 - Sair\n" +
        "Escolha uma opção:"
    ));
    
    

    if (opcao === 1) {

       let nm1 = Number(prompt("Digite o primeiro número:"));
       let nm2 = Number(prompt("Digite o segundo número:"));
       console.log(somar(nm1, nm2)); 
       
    }
    
    else if (opcao === 2) {
        let nm1 = Number(prompt("Digite o primeiro número:"));
        let nm2 = Number(prompt("Digite o segundo número:"));

        console.log(subtrair(nm1, nm2));
    }
    else if (opcao === 3) {
        let nm1 = Number(prompt("Digite o primeiro número:"));
        let nm2 = Number(prompt("Digite o segundo número:"));

        console.log(multiplicar(nm1, nm2));
    }
    else if (opcao === 4) {
        let nm1 = Number(prompt("Digite o primeiro número:"));
        let nm2 = Number(prompt("Digite o segundo número:"));

    if (nm2 != 0) {
        console.log(dividir(nm1, nm2));
        } 
   
    }
    else if (opcao === 5) {
        console.log("Programa encerrado.");
    }
    else {
        console.log("Opção inválida.");
    }
}


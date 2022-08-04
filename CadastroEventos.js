const prompt = require("readline-sync")
let validacao

do{                             // Retorno do programa caso a lista esteja lotada
let diaEvento
let idadeAtual
let tabelaParticipantes = [     //Lista de Participantes
    "João",
    "Maria",
    "Julia",
    "Jay" 
]

let tabelaPalestrantes = [      //Lista de Palestrantes
    "Eduardo",
    "Jorge",
    "Pietra",
    "Juliana"   
]

NomeParticipante = prompt.question("Qual o seu nome? ") //Nome para cadastro na tabelaParticipantes

do {                         //Estrutura de repetição para caso a data do evento não seja posterior ao dia atual
    diaEvento = prompt.question("Qual o dia do evento? (DD/MM/AAAA) ")  //Recebe o dia do evento pelo teclado, incluindo as barras, como no exemplo entre os parênteses
    let separaEvento = diaEvento.split("/");
    diaEvento = new Date(separaEvento[2], separaEvento[1] - 1, separaEvento[0]); //Data do Evento
    diaAtual = new Date();                                                       //Data Atual
    
    if ((diaEvento < diaAtual)){                                                 //Aviso de data inválida
        console.log("Cadastro não permitido por data inválida ");
    }

} while ((diaEvento < diaAtual) == true)

do{                         //Estrutura de Repetição para caso a idade do usuário não for maior de 18 anos
if (diaEvento > diaAtual) {
    idadeAtual = prompt.question("Qual a sua idade? " );    //Recebe a idade do usuário pelo teclado
} 

if (idadeAtual < 18) {                                      //Aviso de idade insuficiente
    console.log("Cadastro não permitido por idade insuficiente");
}

} while (idadeAtual < 18)

console.log(" --------------");
console.log("| Palestrantes:");                             //Imprime lista de palestrantes
for (let leitura = 0; leitura < tabelaPalestrantes.length; leitura++) {
    console.log("| " + tabelaPalestrantes[leitura] );
}

if ((tabelaParticipantes.length >= 100) == false){  //Estrutura para a impressão da lista de participantes, caso a lista tiver menos de 100 pessoas, incluindo o nome do usuário na lista, pois seu cadastro no evento já será concluído
    console.log(" ----------------");
    console.log("| Participantes: ");
for (let leitura = 0; leitura < tabelaParticipantes.length; leitura++) {
    console.log("| " + tabelaParticipantes[leitura] );
}

tabelaParticipantes[tabelaParticipantes.length + 1] = NomeParticipante //Adiciona o nome do usuário na lista, pois o cadastro foi concluído
console.log("| " + tabelaParticipantes[tabelaParticipantes.length - 1]);
} 

if((tabelaParticipantes.length >= 100) == true){ //Estrutura para a impressão da lista de participantes, caso a lista tiver mais de 100 pessoas, assim, não incluindo o nome do usuário, pois a lista está lotada
    console.log(" ----------------");
    console.log("| Participantes: ");
    for (let leitura = 0; leitura < tabelaParticipantes.length; leitura++) {
        console.log("| " + tabelaParticipantes[leitura] );
    }
}

if ((tabelaParticipantes.length >= 100) == true) {              //Estrutura que avisa se o cadastro foi permitido ou não, baseado na disponibilidade na lista
    console.log("Cadastro não permitido por limites de participantes alcançado");
} else if ((tabelaParticipantes.length >= 100) == false) {      //Se tiver espaço na lista, avisa que o cadastro foi concluído e supre a condição para encerrar o programa, senão volta para o inicio do programa
    console.log("Cadastro Concluído");
    validacao = "Cadastro Concluído"
}

} while (validacao != "Cadastro Concluído")
function pulaLinha(){
    document.write("<br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}


//introdução de quem sou
var anoAtual = 2022;
var anoNascimento = 1988;
var idade = anoAtual - anoNascimento;


//cálculo do IMC feito pelo Return da Function
function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}

//variáveis do IMC
var imcWellington = Math.round(calculaImc(84, 1.91));
var imcCamila = Math.round(calculaImc(70 , 1.70));



//introdução
mostra("Meu nome é Wellington e estou fazendo meus primeiros testes na lógica de programação com JavaScript.");
mostra("Estou em migração de carreira, trocando alguns anos de experiência em Faturamento Hospitalar e ambiente fabril")
mostra("para essa área que me apaixonei rapidamente.");
mostra("Vou começar meus testes utilizando variáveis para descrever quando nasci e quando comecei a estudar programação.")
pulaLinha();
mostra("Eu nasci no ano de" + (anoNascimento) + ", logo tenho " + (idade) + " anos. Comecei a estudar em maio de 2022, aprendendo Lógica de programação,");
mostra("praticando com HTML, CSS e JavaScript, principalmente depois da decisão de me tornar um Desenvolvedor Front-End.")
pulaLinha();
//calculo imc
mostra("Para dar continuídade no aprendizado de funções, vou testar com cálculo dos IMC's da minha esposa e meu.");
pulaLinha();
mostra("O IMC do Wellington(Meu) é " + imcWellington + ".");
mostra("O IMC da Camila(Minha Esposa) é " + imcCamila + ".");
pulaLinha();
//treinando o prompt
mostra("Agora vou treinar o prompt juntamente com o parseInt, que são comandos de interação com o usuário com conversão de string.");
pulaLinha();

alert("Vamos calcular seu IMC.")

var nomeUsuario = prompt("Qual é o seu nome?");
var pesoUsuario = parseInt(prompt("Qual o seu peso?"));
var alturaUsuario = parseFloat(prompt("Qual é a sua altura?"));
var imcUsuario = Math.round(pesoUsuario / (alturaUsuario * alturaUsuario));
mostra("Olá " + nomeUsuario + ". O peso digitado é " + pesoUsuario + " e sua altura é " + alturaUsuario + ".");
mostra("Seu IMC é " + imcUsuario + ".");
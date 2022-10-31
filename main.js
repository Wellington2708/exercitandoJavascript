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
pulaLinha();
mostra("Agora vou praticar o While(Enquanto), que faz uma determinada estrutura se repetir.");
mostra("E também farei a prática do método de repetição utilizando FOR para a construção de uma tabuada.");
pulaLinha();
//variáveis para anos de copa do mundo
alert("Vamos contabilizar o número de Copa Do Mundo até o ano que você digitar")
var anoCopa = 1930;
var limite = parseInt(prompt("Diga um ano limite para mostrar os anos de Copa do Munda."))
while(anoCopa <= limite){
    mostra("Teve copa do mundo em " + anoCopa)
    anoCopa = anoCopa + 4;

}
mostra("Fim");
pulaLinha();
//utilização do método de repetição FOR para a construção de uma tabuada. 
//para o for existem 3 campos para preencher, 1 a variável, segundo a condição, e terceiro a variável mais 1
for (var multiplicador = 1; multiplicador <= 10; multiplicador ++){
    mostra(5 * multiplicador);
};
pulaLinha();
pulaLinha();
//utilizando a repetição while pra verificar média familiar de idade.
alert("Vamos calcular a média de idade de sua família")
var quantidadeFamilia = parseInt(prompt("Quantas pessoas tem sua familia? "));
var numeroPessoas = 1;
var somaIdade = 0;
while(numeroPessoas <= quantidadeFamilia) {
    
    var idade = parseInt(prompt("Qual a idade do seu familiar?"));
    somaIdade = somaIdade + idade;
    numeroPessoas++;
    
}
var mediaIdades = somaIdade / quantidadeFamilia;
mostra("A média de idade da sua família é " + mediaIdades + ".");
pulaLinha();
pulaLinha();

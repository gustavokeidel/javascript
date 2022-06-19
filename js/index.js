/*
autor gustavo
Sinais que usamos: + - * / = ++ -- += -= && || etc...

operadores aritimeticos
operadores de atribuição
operadores de sequencia
operadores de comparação
operadores de condicional(ternario)
operadores logicos

//alert('Seja Bem Vindo');

document.getElementById('texto') .innerHTML = "Meu primeiro texto em JS"

document.write('Oi! escrito com document.write<br>')

console.log('ola tudo bem?')

let a, b, c;
a = 5;
b = 6;
c = 7;

document.write(a)

//FUNCOES - BLOCO DE CODIGO PAR EXECUTAR UMA TAREFA ESPECIFICA
function minhaFuncao(valor1, valor2){
    return valor1 + valor2;
//faz a soma no body
    //document.write(5+5);

}
//document.getElementById('texto') .innerHTML = minhaFuncao(15,20);

var total = minhaFuncao(27,89);
document.write(total);
//DECLARAÇÃO VARIAVEIS


var nome, sobrenome, nomeCompleto;

nome = "Gustavo";
sobrenome = "Keidel";
nomeCompleto = nome +" " +sobrenome;

console.log(nomeCompleto);

//document.getElementById('texto') .innerHTML = nomeCompleto;

//OBJECT
/*
let carro = {
marca:"ford",
modelo: "ka", 
ano: "2004", 
placa:"ABC-1254",
buzina: function(){alert('Biiiiiiiiiiiiiiiiiiiiiiiiiiiiii')},
completo: function(){
return "A marca é " +this.marca + " e o modelo é " + this.modelo}
};

carro.buzina();
document.write(carro.completo());
console.log(carro.completo());
*/

var idade, eleitor, resultado

idade=59;

eleitor = (idade < 18) ? "não, não é eleitor" : "Sim, eleitor"
resultado = (idade > 60 && idade <70);

alert(' A resposta é: ' +eleitor+ ' a idade dele é de: ' + idade + resultado);



function eventoClick(){
documento.write ('teste botao');
}
/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/



/*

const a = 3 
const b = 5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

*/



/*Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo.

Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)

Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */



/*
const num1 = 10

const num2 = 20

if (num1 > num2) {
    
    console.log("10 é o número maior")

} else {

    console.log("20 é o número maior")
}

*/



/*


const num1 = 10
const num2 = 20
const num3 = 30

if (num1 > num2 && num1 > num3) {
    
    console.log("A variável num1 possui o maior valor")

} else if (num2 > num1 && num2 > num3) {
    console.log("A variável num2 possui o maior valor")
    
} else  {

    console.log("A variável num3 possui o maior valor")
}


*/


/*

const parametro = -1;

if (parametro > 0) {
    
    console.log("positive")

} else if (parametro < 0) {
    
    console.log("negative");

} else {

    console.log("zero");

}

*/

/*

const a = -5
const b = 20 
const c = 150

const angulos = a + b + c

if (angulos === 180) {
    
    console.log("True")

} else if (a < 0 || b < 0 || c < 0) {

    console.log("Erro")
    
} else {

console.log("False")

}

*/    




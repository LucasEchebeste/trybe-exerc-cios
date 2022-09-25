/*
Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔 */





const myName = "Lucas"
const birthCity = "Pelotas"
let birthYear = 1995

console.log(myName)
console.log(birthCity)
console.log(birthYear)

birthYear = 2030 

console.log(birthYear)

//birthCity = "Porto Alegre"

console.log(birthCity)

/* A mensagem de erro é pela razão de que não podemos alterar uma constante. */ 





/*Crie uma constante chamada base e atribua a ela o valor 5.
Crie uma constante uma chamada heigth e atribua a ela o valor 8.
Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo. */

const base = 5
const heigth = 8
const area = base * heigth 

console.log(area)

const perimeter = base + base + heigth + heigth

console.log(perimeter)





/*Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
Se a nota for menor que 60, imprima “Você foi reprovada(o)”
Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam. */

const nota = 40

if (nota >= 80) {

    console.log("Parabéns, você foi aprovada(o)!")
    
} else if (nota >= 60 && nota < 80) {

    console.log("Você está na nossa lista de espera")

} else {

    console.log("Você foi reprovada(o)")

}




/*Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

Utilizando if/else, implemente condicionais para que:

Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :). */

let weekDay = "segunda-feira"

if ( weekDay === "segunda-feira" ) {

    console.log("Oba, mais um dia de aprendizado na Trybe >:D")

} else if (weekDay === "terça-feira") {
    
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")

} else if (weekDay === "quarta-feira") {

    console.log("Oba, mais um dia de aprendizado na Trybe >:D")

} else if (weekDay === "quinta-feira") {

    console.log("Oba, mais um dia de aprendizado na Trybe >:D")

} else if (weekDay === "sexta-feira") {

    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
    
} else {

    console.log("FINALMENTE, descanso merecido UwU")

}

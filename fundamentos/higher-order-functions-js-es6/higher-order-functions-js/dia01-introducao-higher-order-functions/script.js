/*Crie uma função que retorne a string 'Acordando!!';
Crie outra função que retorne a string 'Bora tomar café!!';
Crie mais uma função que retorne a string 'Partiu dormir!!';
Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo: */


const wakeUp = () => 'Acordando!!'

const coffe = () => 'Bora tomar café!!'

const sleep = () => 'Partiu dormir!'


const text = (callback) => {
    const result = callback();
    return result;
}

//console.log(text(wakeUp));

/*Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const employeeGenerator = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return { nomeCompleto , email: `${email}@trybe.com`};
  };


const newEmployees = (employeeGenerator) => {
    const employees = {
      id1: employeeGenerator('Aline Gomes'),
      id2: employeeGenerator('Lucas Eche'),
      id3: employeeGenerator('Miguel Gomes'),
    };
    return employees;
  };

  //console.log(newEmployees(employeeGenerator));

  /*Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”). */

  const verificaNumero = (meuNumero, numero) => meuNumero === numero;
const resultadoLoteria = (meuNumero, callback) => {
  const numero = Math.floor((Math.random() * 5) + 1);
  return callback(meuNumero, numero) ? 'VOCE GANHOU!' : 'Tente novamente!';
};
//console.log(resultadoLoteria(2, verificaNumero));


/*Crie uma HOF que receberá três parâmetros:
O primeiro será um array de respostas corretas (soluções);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for “N.A”);
Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays: */

const RESPOSTAS_CERTAS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const RESPOSTAS_ESTUDANTES = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const comparaRespostas = (respostascerta, respostasestudante) => {
  if (respostascerta === respostasestudante) {
    return 1;
  } if (respostasestudante === 'N.A') {
    return 0;
  }
  return -0.5;
};
const pontos = (respostasCertas, respostasEstudantes, acao) => {
  let contador = 0;
  for (let index = 0; index < respostasCertas.length; index += 1) {
    const actionReturn = acao(respostasCertas[index], respostasEstudantes[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};
console.log(pontos(RESPOSTAS_CERTAS, RESPOSTAS_ESTUDANTES, comparaRespostas));



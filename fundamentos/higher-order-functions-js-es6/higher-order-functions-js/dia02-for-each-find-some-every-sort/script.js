//Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
 //emailListInData.forEach(showEmailList);

 


 //Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

 const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((numero) => numero % 3 === 0 && numero % 5 === 0);
};

//console.log(findDivisibleBy3And5());




//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((nome) => nome.length === 5);
};

//console.log(findNameWithFiveLetters());




//Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  function findMusic(id) {
    return musicas.find((musica) => musica.id === id);
  };
  
  //console.log(findMusic('31031686'));




  /*Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
Dica: use some. */

const nomes = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((currentName) => currentName === name);
};

//console.log(hasName(nomes, 'Ana'));




/*Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every; */

const pessoas = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verificaIdades = (arr, idadeMinima) => {
  // Adicione seu código aqui
  return arr.every((pessoa) => pessoa.age >= idadeMinima);
};

//console.log(verificaIdades(pessoas, 18));



//Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((personA, personB) => personA.age - personB.age);

//console.log(people);
// Utilize o reduce para transformar uma matriz em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), [] );
  }

  //console.log(flatten(arrays));


  //Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  //Crie uma string com os nomes de todas as pessoas autoras.
 
  function reduceNames() {
    return books.reduce((acc, book) =>  `${acc} ${book.author.name}.`, '')
  }

  //console.log(reduceNames(books));




//Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
    const numberOfBooks = books.length;
    const sumOfAges = books.reduce((sum, book) => (
      sum + (book.releaseYear - book.author.birthYear)
    ), 0);
    return sumOfAges / numberOfBooks;
  }

  //console.log(averageAge(books));


  
  
  
  //Encontre o livro com o maior nome.

  function longestNamedBook() {
    return books.reduce((biggestBook, currentBook) => {
      if (currentBook.name.length > biggestBook.name.length) {
        return currentBook;
      }
      return biggestBook;
    });
  }

  //console.log(longestNamedBook(books));




  //Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alaruchaa',
  ];
  
  const expectedResult = 20;


    function containsA() {
      let totalOfLettersA = 0;
      names.forEach((name) => {
        const lettersFromName = name.split('');
        totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
          if (currentLetter === 'a' || currentLetter === 'A') {
            return lettersAInName + 1;
          }
          return lettersAInName;
        }, 0);
      });
      return totalOfLettersA;
    }
  

console.log(containsA(books));




/*Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map.

De olho na dica 👀: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

Copiar  */



    const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
    const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
    function studentAverage() {
      return nameAndAverage = students.map((student, index) => (
        {
        name: student,
        average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
      }
      ));
    }

    console.log(studentAverage(books));
    


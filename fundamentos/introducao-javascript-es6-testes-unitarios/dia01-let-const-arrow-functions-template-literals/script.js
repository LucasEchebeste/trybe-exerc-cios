const testingScope = (escopo) => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numerosOrdemCrescente = () => {

    oddsAndEvens [0] = 2
    oddsAndEvens [1] = 3
    oddsAndEvens [2] = 4
    oddsAndEvens [3] = 7
    oddsAndEvens [4] = 10
    oddsAndEvens [5] = 13

    return oddsAndEvens;

}

const numeros = numerosOrdemCrescente();

console.log(`Os números ${numeros} se encontram ordenados de forma crescente`);



const fatorial = (numero) => {
    let resultado = 1;

    for (let index = 2; index <= numero; index +=1) {
        resultado *= index;
    }

    return resultado;

}


const tamPalavra = texto => texto.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];

console.log(tamPalavra("Antonio foi ao banheiro e não sabemos o que aconteceu"));


const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));


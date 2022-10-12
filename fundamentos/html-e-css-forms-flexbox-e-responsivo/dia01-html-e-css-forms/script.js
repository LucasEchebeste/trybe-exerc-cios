function naoEnviar(event) {
    event.preventDefault();
  }

window.onload = function () {
    const limpaInformacoes  = document.querySelector('#limpari');
    limpaInformacoes.addEventListener('click', limpar);
    const button = document.querySelector('#botao');
    button.addEventListener('click', naoEnviar);
  };

  function limpar() {
    const elementosFormulario = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < elementosFormulario.length; index += 1) {
      const userInput = elementosFormulario[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }


  /* QUESTÕES:

  O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
Nome Completo:

Limitado entre 10 e 40 caracteres.
E-mail:

Limitado entre 10 e 50 caracteres.
Destino Preferido:

4 opções: Cidade, Campo, Praia, Montanhas.
Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?

Limite de 500 caracteres.
Qual a melhor data para realizar sua viagem?

Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?

Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

Esses serão os principais campos utilizados nos próximos exercícios.

Crie um botão para enviar as informações preenchidas.
Agora vamos utilizar um pouco de javascript. Para isso, crie o arquivo script.js e o referencie no HTML.

Dica: Coloque a tag <script> no final do seu body.
Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

Crie um botão que limpe as informações contidas nos campos. */


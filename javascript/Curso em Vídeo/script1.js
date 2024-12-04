//Aulas curso em vídeo

// let nome = window.prompt("Qual é seu nome?"); // pergunta o nome
// window.alert ("Bem-vindo(a), " + nome + "!"); // mostra uma frase concatenada com o nome

// let n1 = Number(window.prompt('Digite um número: ')); //window.prompt sempre retorna uma string
// let n2 = Number(window.prompt('Digite outro número: ')); //window.prompt sempre retorna uma string
// let soma = n1 + n2
// window.alert(`A soma dos valores é ${soma}.`)
// (number + number) para adição
// (string + string) para concatenação

//converter string para number: Number(a)
//converter number para string: String(n)

//Comandos para formatar strings:
//let a = 'JavaScript'
//a.length //Para strings: retorna o númeo de caracteres na string. Para arrays: retorna o número de elementos no array.
//a.toUpperCase //retorna uma nova string em maiúsculas
//a.toLowerCase //retorna uma nova string em minúsculas

//Comandos para formatar números:
//n.toFixed(2) //arredonda o número  n para 2 casas decimais e retorna o valor como uma string
//n.toFixed(2).replace('.', ',') //arredonda o número n para 2 casas decimais e substitui o ponto por vírgula.
//parseInt() //Converte uma string para um número inteiro. Ignora qualquer parte não numérica depois do número e pode lidar com bases numéricas diferentes.
//parseFloat() //Converte uma string para um número de ponto flutuante. A função retorna números com casas decimais e lida corretamente com números decimais em uma string.
//n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) //converte número para moeda "real". Exemplo:
// let n = 1543.50
// let reais = n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// console.log (reais)

//Operadores aritméticos:
// + soma: 2+2: 4
// - subtração: 5-2: 3
// * multiplicação: 5*2: 10
// / divisão: 5/2: 2.5
// % resto da divisão: 5%2: 1 (5/2 = 4, resta 1) 
// ** elevado ao quadrado: 5**2: 25

// Ordem de Precedência:
// 1. ()
// 2. **
// 3. * / %
// 4. + -

//Operador ternário:
//teste ? true : false

// DOM
// DOM (Document Object Model), Modelo de Objeto para Documento, é uma *INTERFACE padronizada utilizada para REPRESENTAR um DOCUMENTO HTML. Este modelo utiliza uma linguagem neutra que, por meio de uma árvore hierárquica de diretórios, permite você ACESSAR e INTERAGIR com QUALQUER ELEMENTO de seu DOCUMENTO de maneira DINÂMICA com o uso do JavaScript. Desta forma, o JS tem o poder de:
// alterar, excluir e adicionar: elementos HTML, atributos HTML, eventos HTML, estilos CSS.
// *Interface, do latim INTER(entre) + FACIES(faces), significa: ligação física ou lógica entre 2 sistemas ou partes que não poderiam ser conectados diretamente.
// Ou seja, o DOM é o INTERMEDIADOR da COMUNICAÇÃO da linguagem JavaScript com as tecnologias HTML5 e CSS3.

// Ilustração de uma árvore DOM:
//                  window
//              /     |     \
//      location   document   history
//                    |
//                   html
//                  /   \
//              head     body
//            /   |     / | | \
//        meta  title  h1 p p div
//                       |
//                    strong

// Parent (pai)  - é quem está ACIMA na árvore HIERARQUICA.
// Child (filho) - é quem está ABAIXO na árvore HIERARQUICA.
// É como se fosse uma árvore genealógica. Exemplos:
// HEAD e BODY são FILHOS de HTML;
// HTML é PAI de HEAD e BODY;
// HTML é FILHO de DOCUMENT.

// É importante ressaltar que: um DOCUMENTO HTML e sua REPRESENTAÇÃO DOM são a MESMA COISA. A única diferença é que estes estão REPRESENTADOS de FORMAS DIFERENTES. Ex:
// ("uma garrafa") e ("a bottle") são a MESMA COISA, só que representadas em línguas diferentes. É a mesma ideia.
// Caso você altere o DOCUMENTO HTML você também alterará o seu DOM e vice-versa.
// ____________________________

//     Como ACESSAR/SELECIONAR ELEMENTOS através do DOM:
//   Lista de 5 MÉTODOS de acesso:
// by Tag         - getElementsByTagName("")
// by ID            - getElementByID("")
// by Name     - getElementsByName("")
// by Class      - getElementsByClassName("")
// by Selector - querySelector (""); querySelectorAll ("");

// O método getElementsByTagName() SELECIONA ELEMENTOS via TAG.
// O método getElementById() SELECIONA UM ELEMENTO via ID.
// O método getElementsByName() SELECIONA ELEMENTOS via NOME.
// O método getElementsByClassName("") SELECIONA ELEMENTOS via CLASSE.
// O método querySelector() SELECIONA UM ELEMENTO via SELETOR CSS.
// O método queySelectorAll() SELECIONA ELEMENTOS via SELETOR CSS.

// *Atente-se que alguns dos seletores estão no SINGULAR e outros no PLURAL (Element e Element*S*)
// Caso utilize um seletor que está no PLURAL, para ESPECIFICAR qual TAG, NAME ou CLASS você deseja ACESSAR, você têm que usar, após os parênteses (), os colchetes [] e, dentro destes, você indicará qual a POSIÇÃO do elemento que você deseja ACESSAR.
// Ex da aula:
// document.getElementsByTagName('p')[1];
// Neste exemplo selecionou-se, dentro dos parênteses, todas as tags <p>. E, dentro dos colchetes, selecionou-se a tag <p> que se encontra na 1° POSIÇÃO, ou seja, a 2° tag <p>.
// *Lembrando que a contagem começa em 0. Portanto:
// a posição 0 é a 1° tag <p>
// a posição 1 é a 2° tag <p>
// a posição 2 é a 3° tag <p> ...

// ____________________________

//   Diferença entre  .innerText  e  .innerHTML  :

// A propriedade  .innerText  serve para DEFINIR ou RETORNAR o CONTEÚDO de TEXTO de um ELEMENTO.

// A propriedade  .innerHTML  serve para DEFINIR ou RETORNAR o CONTEÚDO HTML (texto+formatação) de um ELEMENTO.

// ILUSTRAÇÃO (crie um outro documento, monte a estrutura básica HTML5 (!+enter) e insira este código dentro do body):

// <body>
//     <h1>Diferença entre innerText e InnerHTML:</h1>
//     <p class="teste_1"></p>
//     <p id="teste_2"></p>
//     <script>
//         var variavel_1 = document.querySelector('.teste_1')
//         variavel_1.innerText = "Teste do <strong>innerText</strong>"

//         var variavel_2 = document.querySelector('#teste_2')
//         variavel_2.innerHTML = "Teste do <strong>innerHTML</strong>"
//     </script>
// </body>

// ____________________________

//   ALGUMAS DEFINIÇÕES:

// *Um OBJETO no JS é um CONTAINER de PROPRIEDADES e MÉTODOS.

// *Uma FUNÇÃO no JS é um subprograma que pode receber PARÂMETROS e RETORNAR um resultado. São AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO. É um bloco de códigos projetado para executar uma tarefa ou calcular um valor.

// *Um MÉTODO no JS é uma FUNÇÃO que está armazenada na forma de um CONJUNTO DE PROPRIEDADES dentro de um OBJETO. Ou seja, MÉTODOS são AÇÕES que podem ser performadas em OBJETOS.

// *Um EVENTO no JS é uma CONDIÇÃO que, quando verdadeira, fará a CHAMADA de uma FUNÇÃO.

// *O Seletor de Classe é representado por:  .
// *O Seletor de ID é representado por:  #






// function parimp(n) {
//     if (n%2 == 0) {
//         return 'par'
//     }   else {
//         return 'impar'
//     }
// }
// console.log (parimp(22))



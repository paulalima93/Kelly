// ----------------------------------------
// 🧩 Funções em JavaScript
// ----------------------------------------
// Uma função é um bloco de código que executa uma tarefa.
// Ela pode receber valores (parâmetros) e devolver um resultado (retorno).

// Sintaxe básica:
// function nomeDaFuncao(parametros) {
//     // código a ser executado
//     return resultado; // (opcional)
// }

// ----------------------------------------
// 🧠 Função sem parâmetros e sem retorno
// ----------------------------------------
// Executa algo, mas não recebe nem devolve dados.

function mostrarMensagem() {
  console.log("Olá! Seja bem-vindo(a)!");
}

mostrarMensagem(); // Chamando a função

// Saída: Olá! Seja bem-vindo(a)!

// ----------------------------------------
// 👤 Função com parâmetro (mas sem retorno)
// ----------------------------------------
// Recebe um valor e usa dentro do código, mas não devolve nada.

function saudarPessoa(nome) {
  console.log("Olá, " + nome + "!");
}

saudarPessoa("Ana");
saudarPessoa("José");

// Saída:
// Olá, Ana!
// Olá, José!

// ----------------------------------------
// 🔁 Função com retorno (mas sem parâmetro)
// ----------------------------------------
// Devolve um valor usando a palavra-chave "return".

function obterMensagem() {
  return "Funções são muito úteis!";
}

let mensagem = obterMensagem(); // Guarda o valor retornado
console.log(mensagem);

// Saída: Funções são muito úteis!

// ----------------------------------------
// ⚙️ Função com parâmetros e com retorno
// ----------------------------------------
// Recebe valores, processa e devolve um resultado.

function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log("O resultado da soma é:", resultado);

// Saída: O resultado da soma é: 8

// ----------------------------------------
// 💬 Diferença entre mostrar e retornar
// ----------------------------------------
// console.log → mostra na tela
// return → devolve o valor para quem chamou

function mostrarSoma(x, y) {
  console.log("Soma:", x + y); // apenas mostra
}

function retornarSoma(x, y) {
  return x + y; // devolve o valor
}

mostrarSoma(2, 3); // mostra "Soma: 5"
let total = retornarSoma(2, 3);
console.log("Total retornado:", total);

// ----------------------------------------
// ⚡ Arrow Function (forma moderna)
// ----------------------------------------
// É uma forma mais curta de escrever funções.

const dobrar = (numero) => {
  return numero * 2;
};

console.log("Dobro de 5 é:", dobrar(5));

// Se tiver só uma linha, pode simplificar:
const triplo = numero => numero * 3;
console.log("Triplo de 4 é:", triplo(4));

// ----------------------------------------
// 🧮 Exemplos práticos
// ----------------------------------------

// ✅ Verificar se é maior de idade
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarIdade(20));
console.log(verificarIdade(15));

// ✅ Calcular média de 3 notas
function calcularMedia(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;
  return media;
}

let mediaAluno = calcularMedia(7, 8, 9);
console.log("Média final:", mediaAluno);

// ✅ Retornar o maior número
function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log("Maior número é:", maiorNumero(10, 7));

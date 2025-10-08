// ----------------------------------------
// ⚖️ Estrutura IF – Verificação simples
// ----------------------------------------
// Executa um bloco de código **somente se** a condição for verdadeira.

let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
// O bloco dentro do IF só executa se a expressão for verdadeira.
// Caso contrário, ele é ignorado.

console.log("=====================================================");

// ----------------------------------------
// 🔀 Estrutura IF...ELSE – Dois caminhos possíveis
// ----------------------------------------
// Permite escolher entre dois blocos: um para verdadeiro e outro para falso.

let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else {
  console.log("Boa tarde!");
}
// Se `hora` for menor que 12, exibe "Bom dia!", senão executa o bloco do `else`.

console.log("=====================================================");

// ----------------------------------------
// 🧩 Estrutura ELSE IF – Várias condições em sequência
// ----------------------------------------
// Testa múltiplas possibilidades de forma ordenada.

let nota = 8;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Bom!");
} else if (nota >= 5) {
  console.log("Regular!");
} else {
  console.log("Reprovado!");
}
// O JavaScript testa cada condição em ordem e para na primeira verdadeira.

console.log("=====================================================");

// ----------------------------------------
// 🎚️ Estrutura SWITCH – Comparação direta de valores
// ----------------------------------------
// Substitui múltiplos IFs quando se compara a mesma variável a vários valores.

let dia = "quarta";

switch (dia) {
  case "segunda":
    console.log("Início da semana!");
    break;
  case "terça":
  case "quarta":
  case "quinta":
    console.log("Dia de trabalho normal.");
    break;
  case "sexta":
    console.log("Quase fim de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("Aproveite o fim de semana!");
    break;
  default:
    console.log("Dia inválido!");
}
// O `switch` compara `dia` com cada `case`. 
// O comando `break` evita que os próximos casos sejam executados.
// O `default` funciona como o `else`.

console.log("=====================================================");

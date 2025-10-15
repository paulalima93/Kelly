// ----------------------------------------
// 🔁 Loops (Laços de Repetição) em JavaScript
// ----------------------------------------
// Um loop serve para repetir um bloco de código várias vezes automaticamente.
//
// Exemplo do mundo real:
// Imagine que você quer entregar 10 presentes, um por um.
// Em vez de escrever 10 vezes “Entregar presente”, usamos um loop.
//
// Loops são usados para:
// ✅ Repetir ações várias vezes
// ✅ Percorrer arrays e listas
// ✅ Fazer cálculos repetitivos
// ✅ Automatizar tarefas

// ----------------------------------------
// 🧠 Tipos de Loops em JavaScript
// ----------------------------------------
// Existem vários tipos de loops. Os principais são:
// for, while, do...while, for...of e for...in

// ----------------------------------------
// ➿ for – quando sabemos quantas vezes repetir
// ----------------------------------------
// Sintaxe: for (inicialização; condição; incremento)

for (let i = 1; i <= 5; i++) {
  console.log("Contagem:", i);
}

// Explicação:
// i = 1 → valor inicial
// i <= 5 → enquanto for verdadeiro, repete
// i++ → soma +1 a cada repetição

// ----------------------------------------
// 🔄 while – quando não sabemos quantas vezes repetir
// ----------------------------------------

let contador = 1;

while (contador <= 3) {
  console.log("Repetição número:", contador);
  contador++; // importante para não travar o loop!
}

// ----------------------------------------
// ♻️ do...while – executa pelo menos UMA vez
// ----------------------------------------

let numero = 5;

do {
  console.log("Número atual:", numero);
  numero++;
} while (numero < 5);

// Mesmo que a condição seja falsa, ele roda 1 vez antes de parar.

// ----------------------------------------
// 🧩 for...of – percorre ARRAYS e listas
// ----------------------------------------

let frutas = ["Maçã", "Banana", "Uva"];

for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}

// ----------------------------------------
// 🔑 for...in – percorre OBJETOS (ou índices de arrays)
// ----------------------------------------

let pessoa = { nome: "Ana", idade: 25, cidade: "Rio" };

for (let chave in pessoa) {
  console.log(chave + ":", pessoa[chave]);
}

// for (let fruta in frutas) {
//   console.log("Fruta:", fruta);
// }

// ----------------------------------------
// 🧱 break – interrompe o loop imediatamente
// ----------------------------------------

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Parando no número 5!");
    break; // encerra o loop aqui
  }
  console.log("Número:", i);
}

// ----------------------------------------
// 🪄 continue – pula a iteração atual e continua o loop
// ----------------------------------------

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // pula o número 3
  console.log("Número:", i);
}

// ----------------------------------------
// 🧮 Exemplo prático: soma dos números de 1 a 10
// ----------------------------------------

let soma = 0;

for (let i = 1; i <= 10; i++) {
  soma += i;
}

console.log("Soma total:", soma);

// ----------------------------------------
// 📊 Exemplo prático: média de notas
// ----------------------------------------

let notas = [8, 7, 10, 6];
let total = 0;

for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

let media = total / notas.length;
console.log("Média do aluno:", media);

// ----------------------------------------
// 💡 Loop dentro de loop (aninhado)
// ----------------------------------------

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i =", i, "| j =", j);
  }
}

//----------------------------------------------------------------------

// ----------------------------------------
// 🧮 Aplicando com Arrays e Loops juntos
// ----------------------------------------

let numeros = [1, 2, 3, 4, 5];
let dobrados = [];

for (let i = 0; i < numeros.length; i++) {
  dobrados.push(numeros[i] * 2);
}

console.log("Números dobrados:", dobrados);

// ----------------------------------------
// 🧠 Resumo geral
// ----------------------------------------
/*
Loops servem para repetir blocos de código automaticamente.

Tipos principais:
for         → quando sabemos o número de repetições
while       → repete enquanto a condição for verdadeira
do...while  → executa ao menos uma vez
for...of    → percorre arrays e listas
for...in    → percorre objetos (ou índices)

Comandos úteis:
break       → interrompe o loop
continue    → pula para a próxima repetição

Usos práticos:
✅ Contar números
✅ Calcular somas e médias
✅ Ler listas e arrays
✅ Automatizar tarefas repetitivas
*/


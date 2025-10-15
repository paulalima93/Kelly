// ----------------------------------------
// 📦 Arrays (Vetores) em JavaScript
// ----------------------------------------
// Um array é uma estrutura que guarda vários valores em uma única variável.
// Cada valor é armazenado em uma posição (índice) que começa no número 0.
//
// Exemplo do mundo real:
// Imagine uma prateleira com várias caixas — cada caixa tem um número (índice)
// e dentro dela guardamos um valor (dado).
//
// Usamos arrays para armazenar listas de informações como:
// nomes de alunos, notas, produtos, cores, etc.

// ----------------------------------------
// 🧠 Criando um Array
// ----------------------------------------

//              0        1          2        3
let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// let array = [] -> array vazio

console.log(frutas);         // Mostra o array completo
console.log(frutas[0]);      // Mostra o primeiro item (índice 0)
console.log(frutas[2]);      // Mostra "Laranja"

// Alterando um valor dentro do array:
frutas[1] = "Abacaxi";
console.log(frutas);

// ----------------------------------------
// 🧾 Propriedade .length
// ----------------------------------------
// Mostra quantos elementos o array tem.

console.log("Quantidade de frutas:", frutas.length);

// ----------------------------------------
// 🧮 Percorrendo um array (loop for)
// ----------------------------------------

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta", i, ":", frutas[i]);
}

// ----------------------------------------
// ⚙️ Métodos mais usados em Arrays
// ----------------------------------------
// Existem vários métodos (funções prontas) para manipular arrays.
// Abaixo estão os mais importantes e usados no dia a dia:

// ----------------------------------------
// ➕ push() – Adiciona um elemento no FINAL do array
// ----------------------------------------
frutas.push("Pera");
console.log("Após push:", frutas);

// ----------------------------------------
// ➖ pop() – Remove o ÚLTIMO elemento do array
// ----------------------------------------
frutas.pop();
console.log("Após pop:", frutas);

// ----------------------------------------
// ➕ unshift() – Adiciona um elemento no INÍCIO do array
// ----------------------------------------
frutas.unshift("Manga");
console.log("Após unshift:", frutas);

// ----------------------------------------
// ➖ shift() – Remove o PRIMEIRO elemento do array
// ----------------------------------------
frutas.shift();
console.log("Após shift:", frutas);

// ----------------------------------------
// 🔍 indexOf() – Encontra o índice (posição) de um item
// ----------------------------------------
let posicao = frutas.indexOf("Laranja");
console.log("Posição da Laranja:", posicao);

// Se não encontrar o item, retorna -1
console.log("Posição da Goiaba:", frutas.indexOf("Goiaba"));

// ----------------------------------------
// 🧩 includes() – Verifica se um valor existe no array
// ----------------------------------------
console.log("Tem Maçã?", frutas.includes("Maçã"));
console.log("Tem Uva?", frutas.includes("Uva"));

// ----------------------------------------
// ✂️ splice() – Adiciona ou remove itens de qualquer posição
// ----------------------------------------
// Sintaxe: array.splice(posiçãoInicial, quantidadeRemover, novosItens...)

frutas.splice(1, 1, "Kiwi", "Abacate");
console.log("Após splice:", frutas);

// ----------------------------------------
// 📄 slice() – Cria uma cópia parcial do array (sem alterar o original)
// ----------------------------------------
let algumasFrutas = frutas.slice(1, 3); // copia do índice 1 até o 2
console.log("Algumas frutas:", algumasFrutas);
console.log("Original continua igual:", frutas);

// ----------------------------------------
// 🔄 reverse() – Inverte a ordem dos itens do array
// ----------------------------------------
frutas.reverse();
console.log("Array invertido:", frutas);

// ----------------------------------------
// 🔤 join() – Junta os elementos em uma string (texto)
// ----------------------------------------
let texto = frutas.join(" - ");
console.log("Lista de frutas:", texto);

// ----------------------------------------
// 🔢 sort() – Ordena os elementos em ordem alfabética
// ----------------------------------------
frutas.sort();
console.log("Frutas em ordem alfabética:", frutas);



// ----------------------------------------
// 🧮 Exemplo prático: Lista de notas e média
// ----------------------------------------
let notas = [7, 8.5, 9, 6, 10];
console.log("Notas:", notas);

// Calculando média usando o array
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;
console.log("Média do aluno:", media);

// ----------------------------------------
// 💡 Métodos modernos (ES6+)
// ----------------------------------------
// map(), filter(), reduce(), forEach()
// São muito usados em projetos atuais com JavaScript.

// ----------------------------------------
// 🔁 forEach() – Executa uma função para cada item
// ----------------------------------------
let cores = ["Azul", "Verde", "Amarelo"];

cores.forEach(function(cor, indice) {
  console.log("Cor", indice + ":", cor);
});

// ----------------------------------------
// 🧩 map() – Cria um novo array transformando os valores
// ----------------------------------------
let numeros = [2, 4, 6, 8];
numeros.map(function(n) {
  return n * 2;
});

console.log("Números originais:", numeros);
console.log("Números dobrados:", dobrados);

// ----------------------------------------
// 🧹 filter() – Cria um novo array filtrando os valores
// ----------------------------------------
let idades = [12, 18, 25, 15, 30];
let maiores = idades.filter(function(idade) {
  return idade >= 18;
});

console.log("Idades maiores ou iguais a 18:", maiores);

// ----------------------------------------
// 🧮 reduce() – Reduz todos os valores a um único resultado
// ----------------------------------------
let valores = [10, 20, 30, 40];
let total = valores.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);

console.log("Soma total dos valores:", total);

// ----------------------------------------
// 🧠 Resumo geral
// ----------------------------------------
/*
Arrays são listas que armazenam vários valores em uma só variável.
Principais usos:
✅ Guardar listas de dados
✅ Percorrer com loops
✅ Manipular e transformar dados com métodos

Métodos mais usados:
.push()     → adiciona no final
.pop()      → remove o último
.unshift()  → adiciona no início
.shift()    → remove o primeiro
.indexOf()  → retorna a posição
.includes() → verifica se existe
.splice()   → adiciona/remove elementos
.slice()    → copia parte do array
.sort()     → ordena
.reverse()  → inverte
.join()     → transforma em texto
.forEach()  → percorre
.map()      → transforma
.filter()   → filtra
.reduce()   → soma ou acumula valores
*/



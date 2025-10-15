// ----------------------------------------
// 🧩 Exercícios - Array
// ----------------------------------------


//1️ Crie um array com 5 nomes de alunos e exiba todos no console.
let alunos = ["João", "Maria", "Paulo", "Ana", "Fábio"];
console.log(alunos);

//Alterar um nome

alunos[3] = "Ana Joaquina";
console.log(alunos)

//2️ Adicione mais um nome ao final e um no início da lista.

alunos.push("Mário");
alunos.unshift("Clara");
console.log(alunos);

//3️ Remova o último elemento e mostre o array atualizado.
alunos.pop();
console.log(alunos)

//4️ Verifique se um nome específico está na lista.

console.log(alunos.includes("clara") ? 'Clara está na lista!' : 'Clara náo está na lista!');
//5️ Crie um array de números e mostre apenas os pares.
let numeros = [12, 23, 44, 8, 7];
let pares = numeros.filter(function (numero) {
    return numero % 2 == 0;
});
console.log('os numeros pares são', pares);
//6️ Calcule a soma de todos os números de um array usando reduce().
console.log(numeros.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0))

//7️ Crie um array com notas e mostre apenas as maiores ou iguais a 7.

//era pra usar o filter

let notas = [3, 5, 7, 9, 8];
let notasVerdes = []
notas.forEach(function (nota, indice) {
    // console.log(nota >= 7 ? nota : '');

    if (nota >= 7) {
        notasVerdes.push(nota)
    }
})
console.log(notasVerdes)
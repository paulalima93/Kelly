// ----------------------------------------
// 🧩 Exercícios de fixação - Funções
// ----------------------------------------

// 1 - Crie uma função olaMundo() que exibe "Olá, mundo!"
function olaMundo() {
    console.log('Olá Mundo !');
}

olaMundo();
// 2️ - Crie uma função saudarAluno(nome) que exibe "Bem-vindo, [nome]!"
function saudarAluno(nome) {
    console.log(`Bem vindo, ${nome}`);  // (lembrar que é crase) outra forma de apresentar variavel ( template literals) 
}

saudarAluno('Marieta');
// 3️ - Crie uma função dobrar(numero) que retorna o dobro de um número.
function dobrar(numero) {
    return numero * 2;
}

let resultado = dobrar(6);
console.log(`O dobro do numero é ${resultado}`)

// 4️ - Crie uma função calcularAreaRetangulo(base, altura) que retorna a área.
function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

let area = calcularAreaRetangulo(4, 5);
console.log(`A área do retângulo é : ${area}`);

// 5️ - Crie uma função ehPar(numero) que retorna true se for par e false se for ímpar.
function ehPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let par = ehPar(67);
console.log(par ? 'É par!' : 'É impar!');   // operador de condicional ternario se for trua vai aparecer a frase antes dos : e se for falso depois dos :

if (par) {                      // sempre o true vai ser o if e o falso vai ser o else
    console.log('É par!');
} else {
    console.log('É impar!');
}

let variavel = 8 >= 9;
console.log(variavel);
// 6️ - Crie uma função converterParaCelsius(fahrenheit) que converte e retorna em Celsius.
// 7️ - Crie uma função mediaNotas(n1, n2, n3) que retorna a média e exibe se está aprovado.



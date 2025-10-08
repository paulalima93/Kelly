// Exercícios de Fixação

// ----------------------------------------
// 1. Crie um programa que receba um número e verifique:
// - Se o número é par ou ímpar
// Use o operador `%` (módulo) e exiba no console o resultado.
// ----------------------------------------
let numero = 12;

if (numero % 2 === 0) {
    console.log(numero + " é par!");
} else {
    console.log(numero + " é impar!")
}
// ----------------------------------------
// 2. Crie uma variável `idade` e verifique se ela é maior ou igual a 18.
// - Se for, exiba "Maior de idade"
// - Caso contrário, exiba "Menor de idade"
// ----------------------------------------
let idade = 18;

if (idade >= 18){
    console.log("Maior de idade!")
} else {
    console.log("Menor de idade!")
}
// ----------------------------------------
// 3. Crie uma variável `numero` e verifique se ele é:
// - Positivo
// - Negativo
// - Ou zero
// Use if...else if...else para as três condições.
// ----------------------------------------

let numero2 = 0;

if (numero2 > 0){
    console.log(numero2 + " é positivo.")
} else if (numero2 < 0){
    console.log(numero2 + " é negativo.")
} else {
    console.log(numero2 + " é zero.")
}

// ----------------------------------------
// 4. Crie duas variáveis `nota1` e `nota2`.
// - Calcule a média das duas notas.
// - Se a média for >= 7 → "Aprovado"
// - Se estiver entre 5 e 6.9 → "Recuperação"
// - Caso contrário → "Reprovado"
// ----------------------------------------

let nota1 = 6;
let nota2 = 4;
let media = (nota1 + nota2)/2;

if (media >= 7){
    console.log("Aprovado!")
} else if (media >= 5){
    console.log("Recuperação!")
}else {
    console.log("Reprovado!")
}

// ----------------------------------------
// 5. Crie uma variável `totalCompra`.
// - Se o valor for maior que 100, aplique 10% de desconto.
// - Exiba o valor final da compra com e sem desconto.
// Use operadores matemáticos para o cálculo.
// ----------------------------------------

let totalCompra = 120;

if(totalCompra > 100){
    console.log( "Valor total da compra com desconto é : "+ (totalCompra * 0.9) )
}else{
    console.log ("Valor total da compra é: " + totalCompra)
}

// ----------------------------------------
// 6. Crie duas variáveis `usuario` e `senha` com valores pré-definidos.
// Depois, crie duas variáveis `loginUsuario` e `loginSenha` (simulando entrada do usuário).
// - Se o usuário e senha estiverem corretos, exiba "Login bem-sucedido"
// - Caso contrário, "Acesso negado"
// Use o operador lógico && (E).
// ----------------------------------------

// ----------------------------------------
// 7. Crie uma variável `numero` e verifique se ele está entre 10 e 50 (inclusive).
// - Exiba "Dentro do intervalo" ou "Fora do intervalo"
// Use operadores relacionais (>= e <=) e o operador lógico &&.
// ----------------------------------------

// ----------------------------------------
// 8. Crie três variáveis `a`, `b`, `c`.
// - Descubra qual é o maior número entre elas.
// - Exiba no console o maior valor.
// Use if...else if...else.
// ----------------------------------------

// ----------------------------------------
// 9. Crie uma variável `dia` (número de 1 a 7).
// Use `switch` para exibir o nome do dia da semana:
// 1 - Domingo
// 2 - Segunda
// 3 - Terça
// 4 - Quarta
// 5 - Quinta
// 6 - Sexta
// 7 - Sábado
// Caso o número não esteja entre 1 e 7, exiba "Dia inválido".
// ----------------------------------------

// ----------------------------------------
// 10. Crie uma calculadora simples com três variáveis:
// - `num1`, `num2` e `operacao`
// O valor de `operacao` pode ser: "+", "-", "*", ou "/".
// Use `switch` para realizar o cálculo correspondente
// e exibir o resultado no console.
// ----------------------------------------
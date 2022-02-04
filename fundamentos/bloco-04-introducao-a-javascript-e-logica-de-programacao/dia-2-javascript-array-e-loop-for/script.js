// ITEM 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

// ITEM 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
    console.log(resultado);
}

// ITEM 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let media = soma / numbers.length;
console.log(media);

// ITEM 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let media = soma / numbers.length;
if (resultado > 20) {
    console.log("valor maior que 20")
} else if (resultado <= 20) {
    console.log("valor menor ou igual a 20")
}

// ITEM 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > numeroMaior) {
        numeroMaior = numbers[index];
    }
}

console.log(numeroMaior);

// ITEM 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0
for (let number of numbers) {
    if (number % 2 !== 0) {
        count += 1
    }
}
if (count > 0) {
    console.log(count)
} else console.log("nenhum valor ímpar encontrado")

// ITEM 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMenor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < numeroMenor) {
        numeroMenor = numbers[index];
    }
}
console.log(numeroMenor);

// ITEM 8
let numbers = [];
for (let number = 1; number <= 25; number += 1) {
    numbers.push(number)
}
console.log(numbers)
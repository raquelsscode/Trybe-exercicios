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
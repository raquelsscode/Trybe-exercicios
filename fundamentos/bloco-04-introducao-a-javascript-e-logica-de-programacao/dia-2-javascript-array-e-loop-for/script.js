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

//ITEM 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let media = soma / numbers.length;
console.log(media);
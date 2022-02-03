// ITEM 1
const a = 2;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// ITEM 2
const num1 = 100;
const num2 = 69;

if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
}

// ITEM 3
const number1 = 300
const number2 = 200
const number3 = 100

if (number1 > number2 && number3) {
    console.log(number1)
} else if (number2 > number3 && number1) {
    console.log(number2)
} else if (number3 > number1 && number2) {
    console.log(number3)
}

// ITEM 4
const valor = 0;

if (valor > 0) {
    console.log('positive')
} else if (valor < 0) {
    console.log('negative')
} else {
    console.log('zero')
}
// ITEM 5
const valor1 = 60;
const valor2 = -4;
const valor3 = 60;

let sumOfAngles = valor1 + valor2 + valor3;

let todosOsAngulosPositivos = valor1 > 0 && valor2 > 0 && valor3 > 0;

if (todosOsAngulosPositivos) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("error 404")
}
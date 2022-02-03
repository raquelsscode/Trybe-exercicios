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
// ITEM 6
let pecadexadrez = 'rei'

switch (pecadexadrez.toLowerCase()) {
    case 'peão':
        console.log('Uma casa para frente, no inicio duas para frente')
        break;

    case 'torre':
        console.log('linha reta horizontalmente e verticalmente')
        break;

    case 'cavalo':
        console.log('duas casas horizontalmente ou verticalmente em L')
        break;

    case 'rainha':
        console.log('em linha reta - verticalmente, horizontalmente ou diagonalmente')
        break;

    case 'rei':
        console.log('Uma casa em qualquer direção')
        break;

    case 'bispo':
        console.log('diagonal')
        break;

    default:
        console.log('Peça Inválida')

}
// ITEM 7
const porcentagem = -4

if (porcentagem < 0 || porcentagem > 100) {
    console.log('nota inválida')
} else if (porcentagem >= 90) {
    console.log("A")
} else if (porcentagem >= 80) {
    console.log('B')
} else if (porcentagem >= 70) {
    console.log('C')
} else if (porcentagem >= 60) {
    console.log('D')
} else if (porcentagem >= 50) {
    console.log('E')
} else if (porcentagem < 50) {
    console.log('F')
}
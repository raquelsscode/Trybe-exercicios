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

// ITEM 8
const numb1 = 3
const numb2 = 4
const numb3 = 9

if (numb1 % 2 == 0 || numb2 % 2 == 0 || numb3 % 2 == 0) {
    console.log('true')
} else {
    console.log('false')
}

//ITEM 9
const odd1 = 7
const odd2 = 3
const odd3 = 9

if (odd1 % 2 !== 0 || odd2 % 2 !== 0 || odd3 % 2 !== 0) {
    console.log('true')
} else {
    console.log('false')
}

//ITEM 10
const custoProduto = 0
const valorDeVenda = 200

if (valorDeVenda < 0 || custoProduto < 0) {
    console.log('Mensagem de erro')
} else {
    const lucro = valorDeVenda - custoProduto - custoProduto * 0.2

    console.log(lucro * 1000)
}

// ITEM 11
const salarioBruto = 3000
let aliquotaINSS = 0.08 * salarioBruto
let aliquotaIR = 0


if (salarioBruto >= 1556.95 && salarioBruto < 2594.92) {
    aliquotaINSS = 0.09 * salarioBruto
} else if (salarioBruto >= 2594.92 && salarioBruto < 5189.82) {
    aliquotaINSS = 0.11 * salarioBruto
} else if (salarioBruto >= 5189.82) {
    aliquotaINSS = 570.88
}
const salarioBase = salarioBruto - aliquotaINSS
if (salarioBase >= 1903.99 && salarioBase < 2826.65) {
    aliquotaIR = salarioBase * 0.075 - 142.80
} else if (salarioBase >= 2826.65 && salarioBase < 3751.05) {
    aliquotaIR = salarioBase * 0.15 - 354.80
} else if (salarioBase >= 3751.05 && salarioBase < 4664.68) {
    aliquotaIR = salarioBase * 0.225 - 636.13
} else if (salarioBase >= 4664.68) {
    aliquotaIR = salarioBase * 0.275 - 869.36
}
const salarioLiquido = salarioBase - aliquotaIR
console.log(salarioLiquido)
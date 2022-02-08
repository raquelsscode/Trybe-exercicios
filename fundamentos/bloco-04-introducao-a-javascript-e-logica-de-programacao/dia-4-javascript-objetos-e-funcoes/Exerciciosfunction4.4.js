// //ITEM 1

// function verificapalindromo(palindromo) {
//     let reverse = '';
//     let min = palindromo.toUpperCase()
//     reverse = palindromo.split('').reverse().join('');

//     if (reverse === palindromo) {
//         console.log('true');
//     } else console.log('false')
// }
// verificapalindromo('palalelepipedo');

//ITEM 2
function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMenor([2, 3, 6, 7, 10, 1]));

//ITEM 3
function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));
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

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));
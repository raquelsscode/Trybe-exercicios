//ITEM 1

function verificapalindromo(palindromo) {
    let reverse = '';
    let min = palindromo.toUpperCase()
    reverse = palindromo.split('').reverse().join('');

    if (reverse === palindromo) {
        console.log('true');
    } else console.log('false')
}
verificapalindromo('palalelepipedo');
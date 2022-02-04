// ITEM 1
let fatorial = 10
let resultado = fatorial

for (let index = 1; index < fatorial; index += 1) {
    resultado *= index
}
console.log(resultado)

// ITEM 2
let word = 'Raquel';
let palavrareversa = '';

for (let index = 0; index < word.length; index += 1) {
    palavrareversa += word[word.length - 1 - index];
}

console.log(palavrareversa);
const dados = (nomeCompleto) => {
    // let arrumaremail =
    //     nomeCompleto.split(" ", 2)[0].toLowerCase() +
    //     "_" +
    //     nomeCompleto.split(" ", 2)[1].toLowerCase();
    let arrumaremail = nomeCompleto.replace(/ /g, '_').toLowerCase();
    let objetos = {
        nome: nomeCompleto,
        email: `${arrumaremail}@trybe.com`,
    };
    return objetos;
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
};

console.log(newEmployees(dados));

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 ok recebendo como parâmetros o número apostado e uma função ok que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").ok

const sorteio = (numero, numerosorteado) => numerosorteado === numero;
const resultadosorteio = (numero, callback) => {
    const numerosorteado = Math.floor(Math.random() * 5 + 1);
    return callback(numerosorteado, numero) ? "Parabéns você ganhou" : "Tente novamente";
}
console.log(resultadosorteio(5, sorteio))

//3 - Crie uma HOF que receberá três parâmetros.ok O primeiro será um array de respostas corretas (Gabarito)ok, o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)ok e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const hof = (arraycorrect, arrayverif, callback) => {}


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
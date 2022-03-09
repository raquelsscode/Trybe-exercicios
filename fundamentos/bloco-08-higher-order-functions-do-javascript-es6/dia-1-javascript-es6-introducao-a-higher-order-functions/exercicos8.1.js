const dados = (nomeCompleto) => {
    let arrumaremail =
        nomeCompleto.split(" ", 2)[0].toLowerCase() +
        "_" +
        nomeCompleto.split(" ", 2)[1].toLowerCase();
    let objetos = {
        nome: nomeCompleto,
        email: `${arrumaremail}@trybe.com`,
    };
    return objetos;
};

const newEmployees = (dados) => {
    const employees = {
        id1: dados("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: dados("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: dados("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
};

console.log(newEmployees(dados));
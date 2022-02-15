function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//Onde inserir?
let days = document.querySelector('#days');

//Customizar

//tornar visivel
for (index = 0; index < dezDaysList.length; index += 1) {
    let lista = document.createElement('li')
    lista.className = 'day'
    lista.innerHTML = dezDaysList[index]
    if (dezDaysList[index] === 24) {
        lista.className = 'day holiday'
    } else if (dezDaysList[index] === 25) {
        lista.className = 'day holiday friday'
    } else if (dezDaysList[index] === 31) {
        lista.className = 'day holiday'
    } else if (dezDaysList[index] === 4) {
        lista.className = 'day friday'
    } else if (dezDaysList[index] === 11) {
        lista.className = 'day friday'
    } else if (dezDaysList[index] === 18) {
        lista.className = 'day friday'
    }
    days.appendChild(lista);

}

function buttondeholiday(nomeDoBotao) {
    let button = document.querySelector(".buttons-container");
    let buttonname = document.createElement('button');
    let newButtonID = 'btn-holiday'
    buttonname.innerHTML = nomeDoBotao
    buttonname.id = newButtonID
    console.log(button)
    button.appendChild(buttonname);
}
buttondeholiday('Feriados')
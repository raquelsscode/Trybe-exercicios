// ITEM 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
let moreinfos = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

// console.log('Bem-vinda,' + info.personagem)

//ITEM 2
info.recorrente = 'Sim'

// console.log(info)

// //ITEM 3
// for (let key in info) {
//     console.log(key)
// }

// //ITEM 4
// for (let key in info) {
//     console.log(info[key]);
// }

//ITEM 5

for (let key in info) {
    console.log(info[key] + ' e ' + moreinfos[key]);
    if (key === 'recorrente' &&
        info[key] === 'Sim' &&
        moreinfos[key] === 'Sim') {
        console.log('Ambos recorrentes')
    }
}
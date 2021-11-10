console.log('JS OK');

/* 
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const arrayComp = [ramdomNum(0, 10), ramdomNum(0, 10), ramdomNum(0, 10), ramdomNum(0, 10), ramdomNum(0, 10)]
const arrayUsr = []
const arrayCorr = []

console.table(arrayComp);

const HTMLrowcontainer = document.querySelector(".container .row")

for (let i = 0; i < arrayComp.length; i++) {
    HTMLrowcontainer.innerHTML += `<div class="col-2 fs-1 text-center">${arrayComp[i]}</div>`
}

setTimeout(() => {
    HTMLrowcontainer.innerHTML = ''
}, 2990);

setTimeout(() => {
    for (let i = 0; i < arrayComp.length; i++) {
        arrayUsr.push(parseInt(prompt('inserire numeri visti fino ad ora')))
    }

    console.table(arrayUsr);

    for (let i = 0; i < arrayUsr.length; i++) {
        if (arrayUsr[i] === arrayComp[i]) {
            arrayCorr.push(arrayUsr[i])
        }
    }

    HTMLrowcontainer.innerHTML +=`<h1 class="text-center">Hai indovinato correttamente ${arrayCorr.length} numeri e sono:</h1>`

    for (let i = 0; i < arrayCorr.length; i++) {
        HTMLrowcontainer.innerHTML += `<div class="col-2 fs-1 text-center">${arrayCorr[i]}</div>`
    }

}, 3000);





//FUNZIONI
function ramdomNum(min, max) {
    let rNum = Math.floor(Math.random() * max) + min;
    return rNum;
}
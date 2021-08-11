const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    5,
    2,
    3,
    4,
    5,
    6,
    1,
    3,
    2,
    1,
    3
];

/*const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;    //lista1Count[elemento] = lista1Count[elemento] + 1
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);
const moda = lista1Array[lista1Array.length -1];
*/

function calcularModa(lista) {
    const listaCount = {};

lista.map(
    function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;    //listaCount[elemento] = listaCount[elemento] + 1
        } else {
            listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);
const moda = listaArray[listaArray.length -1];
return moda;

}

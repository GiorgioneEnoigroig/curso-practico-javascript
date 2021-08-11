/*var lista1 = [
    100,
    5000000000,
    200,
    700
];

lista1.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

const mitadLista1 = parseInt(lista1.length / 2);
*/
function esPar(numerito) {
    if (numerito % 2 ===0) {
        return true;
} else {
    return false;
    }
}

//let mediana;

/*if (esPar(lista1.length)) {
        //par
        //Calcula el promedio entre los valores del medio
        mediana = (lista1[mitadLista1]+lista1[mitadLista1 - 1]) / 2;
    } else {
        //impar
        //Mitad de la lista de la mediana
        mediana = lista1[mitadLista1];
    }
*/

    function calcularMediana(lista){
            lista.sort(function (a, b) {
            if (a > b) {
              return 1;
            }
            if (a < b) {
              return -1;
            }
            return 0;
          });
          const mitadLista = parseInt(lista.length / 2);
          let mediana = 0;
          
         if (esPar(lista.length)) {
                  //par
                  //Calcula el promedio entre los valores del medio
                  mediana = (lista[mitadLista]+lista[mitadLista - 1]) / 2;
              } else {
                  //impar
                  //Mitad de la lista de la mediana
                  mediana = lista[mitadLista];
              }
            return mediana;
        }
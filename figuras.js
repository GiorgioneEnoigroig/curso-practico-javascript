//codigo cuadrados
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado  + " cms.");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

//console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cms.");

function areaCuadrado(lado) {
     return lado * lado;
} 

//console.log("El área del cuadrado mide: " + areaCuadrado + " cms cuadrados.");
console.groupEnd();


// codigo triangulo

console.group("Triangulo");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const  baseTriangulo = 6;
const alturaTriangulo = 5.5;*/

//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cms., " + ladoTriangulo1 +  "cms., " + baseTriangulo + "cms.");
//console.log("La altura del triangulo mide: " + alturaTriangulo + "cms.");

function perimetroTriangulo(lado1, lado2, base) {
     return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo mide: " + perimetroTriangulo + " cms.");

function areaTriangulo(base, altura) {
          return base * altura / 2;
}

//console.log("El área del triangulo mide: " + areaTriangulo + " cms cuadrados.");

console.groupEnd();


//codigo circulo

console.group("Círculo");
//const radioCirculo = 5;
//const PI = Math.PI;

//console.log("El radio del círculo miden " + radioCirculo  + " cms.");

function circunferencia(radio) {
    return 2 * Math.PI * radio;
}

//console.log("La circunferencia mide: " + circunferencia + " cms.");

function areaCirculo(radio)   {
    return Math.PI * radio * radio;
}

//console.log("El área del círculo mide: " + areaCirculo + " cms cuadrados.");
console.groupEnd();

function calcularPerimetroCuadrado() {
    const input  = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const lado  = document.getElementById("InputCuadrado");
    const valor = lado.value;
    const area = areaCuadrado(valor);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1  = document.getElementById("InputTriangulo1");
    const lado2  = document.getElementById("InputTriangulo2");
    const base  = document.getElementById("InputTriangulo3");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = base.value;
    const perimetro = perimetroTriangulo(parseFloat(value1), parseFloat(value2), parseFloat(value3));
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base  = document.getElementById("InputTriangulo3");
    const altura  = document.getElementById("InputTriangulo4");
    const value3 = base.value;
    const value4 = altura.value;
    const area = areaTriangulo(parseFloat(value3), parseFloat(value4));
    alert(area);
}

function calcularCircunferencia() {
    const input  = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = circunferencia(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input  = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function alturaTrianguloIsosceles(lado1, base) {
    return Math.sqrt((lado1*lado1) - (base / 2 )*(base / 2 ));
}

function calcularAlturaTrianguloIsosceles() {
    const value1  = document.getElementById("InputLadoTriangulo");
    const value2  = document.getElementById("InputBaseTriangulo");    
    const lado = parseFloat(value1.value);
    const base = parseFloat(value2.value);
    if (lado * 2 > base) {     //Para construir un triangulo la suma de los dos lados debe ser mayor que el del restante
       const altura = Math.sqrt((lado*lado) - (base / 2 )*(base / 2 ));
       alert(altura);
    } 
    else {
        alert("La suma de los lados debe ser mayor que la longitud de la base."); 
    }
}
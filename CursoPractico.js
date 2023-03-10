// var, let, const: LET permite modificar la variable en el futuro, CONST no se puede cambiar, es constante.

let auto; // Declarar
auto = "Peugeot"; //  Inicializar
auto = "Audi"; // Reinicializar
console.log(auto); // Devolverá el último valor

// Sumar y concatenar +
let a = 10;
let b = 20;
let suma = a + b;
console.log(suma);
let c = "hola";
let d = "Martín";
let concatenar = c + d;
console.log(concatenar);

// Funciones

function nombreCompleto(nombre, apellido) {
  // nombre y apellido son parametros (los usamos cuando creamos la función)
  return nombre + " " + apellido;
}

console.log(nombreCompleto("Juan", "Perez")); // Juan y Perez son Argumentos (los usamos cuando llamamos la funcion)

// ejercicio
function saludo(nombre, apellido, nickname) {
  const nameComplete = nombreCompleto(nombre, apellido);
  return (
    "Hola, mi nombre es " +
    nameComplete +
    " pero prefiero que me llames " +
    nickname
  );
}

console.log(saludo("Martín", "Maine", "Tincho"));

// Condicionales: (If, if else, else) y (Switch)

const suscripcion = "Basic";

switch (suscripcion) {
  case "Free":
    console.log("nivel 1");
    break;
  case "Basic":
    console.log("nivel 2");
    break;
  case "Premium":
    console.log("nivel 3");
    break;
};

if (suscripcion === "Free") {
    console.log("Nivel 1");
} else if (suscripcion === "Basic") {
    console.log("Nivel 2");
} else if (suscripcion === "Premium") {
    console.log("Nivel 3");
} else {
    console.warn("Necesitas una suscripcion");
}

// Forma de hacerlo como array u objeto con un solo if
const tiposDeSuscripcion = {
    "Free": "nivel 1",
    "Basic": "nivel 2",
    "Premium": "nivel 3"
};

function getTiposDeSuscripcion(suscripcion) { 
    if (tiposDeSuscripcion[suscripcion]){
        console.log(tiposDeSuscripcion[suscripcion]);
        return;
    } 
    console.warn("Ese tipo no existe")
}
console.log(getTiposDeSuscripcion("Basic"));

// Ciclos: Forma de ejecutar un bloque de codigo hasta que se cumpla una condicion
// Tipos: While (hace la validacion y luego ejecuta el codigo), Do While (ejecuta el codigo primero y hace la validacion), For (Nos pide que inicielicemos una variable "i", despupes nos pide la validacion y despues nos pide que quiere que hagamos con esa variable "i")

for (let i= 0; i <= 5; i++) {
    console.log("En FOR, el valor de i es: "+ i );};

let i = 0;

while (i < 5) {
    console.log("En WHILE, el valor de i es: "+ i );
    i++;
};

// Formas del console
console.log("soy log");
console.warn("soy warn");
console.error("soy error");

// Prompt

/* let respuesta;

while (respuesta != '4') {
    let pregunta = prompt ('cuanto es 2 + 2?');
    respuesta = pregunta;
} */

// ARRAY: lista de elemntos; OBJETO: lista de elementos, pero cada elemento tiene un nombre clave
// Los array pueden guardar objetos y los objetos array

const fecha= new Date();
const añoActual = fecha.getFullYear();
const nacimiento = 1985;
function calcularEdad(){
    return añoActual - nacimiento};

const yoObjeto = {
    nombreYo: "Martin",
    apellidoYo: "Maine",
    esteAnnioCumple: calcularEdad(),
    comidasPreferidas: ["piza", "dulce de leche", "palta"]
};

console.log(yoObjeto);

const array = ["Manzana", "banana", "naranja", "Pera"];

function imprimirElementoXElemento(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};

console.log(imprimirElementoXElemento(array));


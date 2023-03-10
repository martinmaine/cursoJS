// Declarar
var nombre;
// Inicializar
nombre = "Martín";

var array = ["Computadora", "Celular", "Monitor"];

var objetos = {
  nombre: "Computadora",
  marca: "Lenovo",
  modelo: "Core i5",
};

// FUNCIONES
// Declarativas
function miFuncion() {
  return 3;
}
// la mando a llamar
miFuncion();

// Expresion

var miFuncion = function (a, b) {
  return a + b;
};

// la mando a llamar
miFuncion();

//ejemplo
function saludarALaGente(personas) {
  console.log(`Hola ${personas} cómo estás?`);
}

saludarALaGente("Martín");

if (false === !true) {
  console.log(false == true);
} else {
  console.log(true === !false);
}

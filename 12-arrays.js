// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 
console.log(frutas); 
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays iician en "0" 


// === Metodos para mutar arrays ===


// .push();

 var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
 console.log(frutas);

// .pop();

 var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
 console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);



 console.log('nuevo Array')

 var jugadores = ["Martin", "Nelio", "Huguito", "Sandra"]

 console.log(jugadores)
 console.log(jugadores[1])

var agregaJugador = jugadores.push("Rami")// agrega al final
console.log(jugadores)

var primerJugador = jugadores.unshift("Pepo") //agrega al principio
console.log(jugadores)

var chauUltimo = jugadores.pop() //elimina el ulitmo
console.log(jugadores)

var chauPrimero = jugadores.shift() //elimina el primero
console.log(jugadores)

var saberPosicion= jugadores.indexOf("Huguito")
console.log(saberPosicion) // devuelve 2

console.log('Loops o ciclos')

function saludarJugadores (jugador){
    console.log(`hola, ${jugador}`)
}

for (var i = 0; i < jugadores.length; i++) {
    saludarJugadores(jugadores[i]) 
 }

 for (var jugador of jugadores)
{
    saludarJugadores(jugador)
}

var jugadores = ["Martin", "Nelio", "Huguito", "Sandra"]

while (jugadores.length > 0){
    console.log(jugadores);
    var jugador = jugadores.shift();
    saludarJugadores(jugadores);
}

console.log('OBJETOS')

var auto = {
    marca: "Peugeot",
    modelo: 2000,
    patente: "AC754CS",
    valor: 10000,
    //metodo de objeto
    antiguedad: function ()  {
        return 2023- this.modelo;
    }
}

function autoF(marca, modelo, patente, valor){
    this.marca = marca;
    this.modelo = modelo;
    this.patente = patente;
    this.valor = valor;
}

var autoNuevo = new autoF("Renault", 2023, "AV454AS", 8000);
console.log(autoNuevo);

//traer un valor del objeto
console.log(auto.marca)
console.log(`Este auto tiene ${auto.antiguedad()} años de antigüedad`)

console.log('ARRAY CON OBJETOS')

var articulos = [
    {
        nombre: "Bicicleta",
        precio: 2000
    },
    {
        nombre: "Casco",
        precio: 100
    },
    {
        nombre: "Inflador",
        precio: 10
    },
    {
        nombre: "Monopatín eléctrico",
        precio: 3000
    },
    {   
        nombre: "Kit accesorios",
        precio: 50
    }
]

//Metodos
    // Filtro 
var articulosFiltro= articulos.filter(function(articulo){
    return articulo.precio <= 100
});

console.log(articulosFiltro);

    // Map
var nombreArticulo= articulos.map(function(articulo){
    return articulo.nombre;
})

console.log(nombreArticulo);

    // Find

var encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bicicleta"});

console.log(encontrarArticulo);

    // ForEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

    // Some
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.precio <= 100 });

console.log(articulosBaratos);

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}
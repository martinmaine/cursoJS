const h1 = document.querySelector("h1");
const elementId = document.getElementById("id1");

console.log(h1);

//h1.innerHTML = 'Esto es un HTML <br> Pero modificado desde JV';
//h1.innerText = "aca manipulando el dom"
//h1.classList.add('agregaClase');
//h1.classList.remove('eliminaClase');
//h1.classList.toggle('verde') cambia la clase
//h1.classList.contain('verde') devuelve true o false

// insertando HTML en JS
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab05l3ndGtZqyqxgTeOkmB7g2eDGyYrQp60gRu108tIEXOLQTl8tf9Jpx90UiNJEIv1Q&usqp=CAU"
);
// para que se vea en el parrafo con id
elementId.append(img);

// enventos en el input
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado =document.querySelector('#result')
const form= document.querySelector('#formulario')


function btnOnClick(event) {
    //console.log({event});
    event.preventDefault();
 const suma = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado: " + suma;
  
}

form.addEventListener('submit', btnOnClick);
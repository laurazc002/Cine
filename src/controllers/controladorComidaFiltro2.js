import { comidaDB } from "../helpers/comidaDB.js";

let paqueteEscogido = JSON.parse(sessionStorage.getItem("paqueteDos"));

comidaDB.forEach(function (comida) {
    comida.paquete.forEach(function (combo) {
        if (paqueteEscogido.nombre == combo.nombre) {
            paqueteEscogido = combo;
            
        }
    });
});

let apartado1=String( sessionStorage.getItem('apartado1'))


let apartadoFiltro1=document.getElementById('apartadoFiltro1')
apartadoFiltro1.textContent=apartado1



let apartadoFiltro2=document.getElementById('apartadoFiltro2')
apartadoFiltro2.textContent=paqueteEscogido.nombre
let pestana=document.getElementById('pestaña')
pestana.textContent='Cine Colombia - comidas - '+paqueteEscogido.nombre
let nombre=document.getElementById('nombre')
nombre.textContent=paqueteEscogido.nombre


let fila=document.getElementById('fila')

console.log(paqueteEscogido)

paqueteEscogido.combos.forEach(function(comida){

    let columna = document.createElement("div")
    columna.classList.add("col")
    
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100","container", 'shadow','text-center')
    
    let imagen= document.createElement('img')
    imagen.classList.add("img-fluid","w-100","my-3")
    imagen.src=comida.imagen

    let nombreEtiqueta=document.createElement('h4')
    nombreEtiqueta.textContent=comida.nombre
    let descripcion=document.createElement('p')
    descripcion.textContent=comida.descripcion

    



    fila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombreEtiqueta)   
    tarjeta.appendChild(descripcion)


})

import { comidaDB } from "../helpers/comidaDB.js";
import {detectarComidaFiltro} from './controladorDetectarComidas.js'

let imagenesCarrusel=document.getElementById('imagenesCarrusel')
comidaDB.forEach(function(comida){
let imagenEtiqueta= document.createElement('img')
imagenEtiqueta.classList.add("d-block", "w-25", "h-25")
imagenEtiqueta.src=comida.paquete[0].imagen && comida.paquete[1].imagen

imagenesCarrusel.appendChild(imagenEtiqueta)
})


let fila= document.getElementById('fila')

comidaDB.forEach(function(categoria){
let tarjeta= document.createElement('div')
tarjeta.classList.add("card", 'shadow')  
let foto=document.createElement('img')
foto.classList.add('img-fluid','w-100')
foto.src=categoria.imagen
let nombreCat= document.createElement('h4')
nombreCat.classList.add('bold')


nombreCat.textContent=categoria.nombre

fila.appendChild(tarjeta)
tarjeta.appendChild(foto)
tarjeta.appendChild(nombreCat)
  
tarjeta.addEventListener('click',function(evento){

let  paquete= detectarComidaFiltro(evento)
console.log(paquete)

sessionStorage.setItem('paquete',JSON.stringify(paquete))  
  window.location.href='./comidaFiltro1.html'


})

})

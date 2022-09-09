console.log("hola")
import { pintarPeliculas } from "../controllers/controladorPaginaPrincipal.js"
import { DB } from "../helpers/DB.js"
import {ampliarInfoPelicula} from './controladorDetectarContenido.js'
pintarPeliculas(DB)


let fila=document.getElementById('fila')
fila.addEventListener('click',function(evento){
let pelicula=ampliarInfoPelicula(evento);
console.log(pelicula)

sessionStorage.setItem('pelis',JSON.stringify(pelicula))

window.location.href='./src/views/ampliarInfoPelicula.html'
})

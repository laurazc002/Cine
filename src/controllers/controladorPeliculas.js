console.log("hola")
import { pintarPeliculas } from "../controllers/controladorPaginaPrincipal.js"
import { pintarPeliculasPronto } from "./controladorPintarPeliculasPorEstrenar.js"
import { DB } from "../helpers/DB.js"
import {ampliarInfoPelicula} from './controladorDetectarContenido.js'

 let peliculasEnCartelera = DB.filter(function(peliculaCartelera){
    return(peliculaCartelera.catergoria=='cartelera')
})

let peliculasPorEstrenar = DB.filter(function(peliculaPronto){
    return(peliculaPronto.catergoria=='pronto')
})

pintarPeliculas(peliculasEnCartelera)

pintarPeliculasPronto(peliculasPorEstrenar)

let fila=document.getElementById('fila')
fila.addEventListener('click',function(evento){
let pelicula=ampliarInfoPelicula(evento);
console.log(pelicula)

sessionStorage.setItem('pelis',JSON.stringify(pelicula))

window.location.href='./src/views/ampliarInfoPelicula.html'
})

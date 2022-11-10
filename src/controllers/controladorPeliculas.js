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


// // barra navegador
//let ciudad= JSON.stringify(sessionStorage.getItem('ciudad'))

let icono=document.getElementById('icono')
let container=document.getElementById('container')

icono.addEventListener('click',function(){
container.setAttribute('class','abre')

})

container.addEventListener('mouseleave',function(){
container.setAttribute('class','container-lista')
})

// pintando peliculas

pintarPeliculas(peliculasEnCartelera)

pintarPeliculasPronto(peliculasPorEstrenar)

let fila=document.getElementById('fila')
fila.addEventListener('click',function(evento){
let pelicula=ampliarInfoPelicula(evento);
console.log(pelicula)

sessionStorage.setItem('pelis',JSON.stringify(pelicula))



window.location.href='./src/views/ampliarInfoPelicula.html'
})

let filaPronto=document.getElementById('filaPronto')

filaPronto.addEventListener('click',function(evento){
let pelicula=ampliarInfoPelicula(evento);
console.log(pelicula)

sessionStorage.setItem('pelis',JSON.stringify(pelicula))

window.location.href='./src/views/ampliarInfoPelicula.html'
})

import { DB } from "../helpers/DB.JS";
import { pintarPeliculas } from "./controladorPaginaPrincipal.js";


let peliculasEnCartelera = DB.filter(function(peliculaCartelera){
    return(peliculaCartelera.catergoria=='cartelera')
})

pintarPeliculas(peliculasEnCartelera)


console.log( peliculasEnCartelera)


let imagenesCarrusel=document.getElementById('imagenesCarrusel')
peliculasEnCartelera.forEach(function(pelicula){
let imagen= document.createElement('img')
imagen.classList.add("d-block", "w-25", "h-25")
imagen.src=pelicula.fotos[0]



imagenesCarrusel.appendChild(imagen)

})
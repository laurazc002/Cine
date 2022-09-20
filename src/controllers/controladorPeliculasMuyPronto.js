import { DB } from "../helpers/DB.JS";
import { pintarPeliculasPronto } from "./controladorPintarPeliculasPorEstrenar.js";

let peliculasPorEstrenar = DB.filter(function(peliculaPronto){
    return(peliculaPronto.catergoria=='pronto')
})

pintarPeliculasPronto(peliculasPorEstrenar)

let imagenesCarrusel=document.getElementById('imagenesCarrusel')
peliculasPorEstrenar.forEach(function(pelicula){
let imagen= document.createElement('img')
imagen.classList.add("d-block", "w-25", "h-25")
imagen.src=pelicula.fotos[0]



imagenesCarrusel.appendChild(imagen)

})
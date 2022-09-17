import { DB } from "../helpers/DB.js"
let peliculas=JSON.parse(sessionStorage.getItem('pelis'))

console.log(DB)
let trailer
peliculas.trailer=''
DB.forEach(function(pelis){
    if(pelis.nombre==peliculas.nombre){
        peliculas.trailer=pelis.trailer
        peliculas.foto=pelis.fotos
    }
})
console.log(peliculas)




document.getElementById('titulo').innerHTML=peliculas.nombre
let banner=document.getElementById('banner')
let foto=document.getElementById('foto')
let trailerEtiqueta=document.getElementById('video')
let nombre=document.getElementById('nombre')
let nombreIngles=document.getElementById('nombreIngles')
let estreno=document.getElementById('estreno')
let genero=document.getElementById('genero')
let recomendacion=document.getElementById('recomendacion')
let duracion=document.getElementById('duracion')

banner.src=peliculas.foto[1]
foto.src=peliculas.foto[0]
trailerEtiqueta.src=peliculas.trailer
nombre.textContent=peliculas.nombre
nombreIngles.textContent=peliculas.nombreIngles
estreno.textContent=peliculas.estreno
genero.textContent=peliculas.genero
recomendacion.textContent=peliculas.recomendacion
duracion.textContent=peliculas.duracion


    
 



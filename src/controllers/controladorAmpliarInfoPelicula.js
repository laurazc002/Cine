let peliculas=JSON.parse(sessionStorage.getItem('pelis'))
console.log(peliculas)
document.getElementById('titulo').innerHTML=peliculas.nombre
let datos1=document.getElementById('nombre')
let fotoPelicula=document.getElementById('foto')
fotoPelicula.src=peliculas.foto

let nombre=document.createElement('h3')
nombre.textContent=peliculas.nombre
nombre.classList.add('fw-bold','text-center')
let genero=document.createElement('h5')
genero.classList.add('fw-bold','text-center')
genero.textContent=peliculas.genero

datos1.appendChild(nombre)
datos1.appendChild(genero)
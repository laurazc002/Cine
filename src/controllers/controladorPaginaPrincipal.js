export function pintarPeliculas(peliculas){

    let fila = document.getElementById("fila")
    fila.innerHTML= ""

    peliculas.forEach(function(pelicula){

    let columna = document.createElement("div")
    columna.classList.add("col")
   
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100","container")

    let FotoPelicula = document.createElement("img")
    FotoPelicula.classList.add("img-fluid","w-100","my-3")
    FotoPelicula.src = pelicula.fotos

    let nombrePelicula = document.createElement("h3")
    nombrePelicula.textContent = pelicula.nombre

    let nombreIngles = document.createElement("h4")
    nombreIngles.classList.add("text-muted")
    nombreIngles.textContent = `Titulo en Ingles: ${pelicula.tituloIngles}`

    let estrenoPelicula = document.createElement("h6")
    estrenoPelicula.classList.add("text-muted")
    estrenoPelicula.textContent = `Estreno: ${pelicula.estreno}`

    let generoPelicula = document.createElement("h5")
    generoPelicula.classList.add("text-muted")
    generoPelicula.textContent = `Genero: ${pelicula.genero}`

    let duracionPelicula = document.createElement("h7")
    duracionPelicula.classList.add("text-muted")
    duracionPelicula.textContent = `Duración: ${pelicula.duracion}`

    let recomendacionPelicula = document.createElement("button")
    recomendacionPelicula.classList.add("btn","my-3","btn-secondary")
    recomendacionPelicula.textContent = pelicula.recomendacion

    let Description= document.createElement("p")
    Description.classList.add("d-none")
    Description.textContent = 
    
   
    tarjeta.appendChild(FotoPelicula)
    tarjeta.appendChild(nombrePelicula)
    tarjeta.appendChild(nombreIngles)
    tarjeta.appendChild(estrenoPelicula)
    tarjeta.appendChild(generoPelicula)
    tarjeta.appendChild(duracionPelicula)
    tarjeta.appendChild(recomendacionPelicula)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})

}
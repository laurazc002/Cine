export function ampliarInfoPelicula(evento){
    
    let pelicula = { 
        foto: evento.target.parentElement.querySelector('img').src,
        nombre: evento.target.parentElement.querySelector('h3').textContent ,
        nombreIngles: evento.target.parentElement.querySelector('h4').textContent ,
        fecha: evento.target.parentElement.querySelector('h6').textContent,
        genero: evento.target.parentElement.querySelector('h5').textContent,
      //  descripcion:evento.target.parentElement.querySelector('p').textContent,
        duracion:evento.target.parentElement.querySelector('h7').textContent,
        recomendacion:evento.target.parentElement.querySelector('button').textContent,
    }
 return pelicula
}

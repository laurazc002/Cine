export function detectarComidaFiltro(evento){

    let  paquete={
        foto: evento.target.parentElement.querySelector('img').src,
        nombre: evento.target.parentElement.querySelector('h4').textContent
    }
return paquete
    
}
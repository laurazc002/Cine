import {comidaDB} from '../helpers/comidaDB.js'
import {detectarComidaFiltro} from './controladorDetectarComidas.js'


let paqueteEscogido = JSON.parse(sessionStorage.getItem('paquete'))

comidaDB.forEach(function(comida){
    if(paqueteEscogido.nombre==comida.nombre){
        paqueteEscogido=comida
    }
    
})
console.log(paqueteEscogido)
let pestana=document.getElementById('pestaña')
pestana.textContent='Cine Colombia - comidas - '+paqueteEscogido.nombre
let nombre=document.getElementById('nombre')
nombre.textContent=paqueteEscogido.nombre
let fila=document.getElementById('fila')

let apartado1 =paqueteEscogido.nombre
sessionStorage.setItem('apartado1', apartado1)

let apartadoFiltro1=document.getElementById('apartadoFiltro1')
apartadoFiltro1.textContent=apartado1




paqueteEscogido.paquete.forEach(function(comida){

    
    let columna = document.createElement("div")
    columna.classList.add("col")
    
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100","container", 'shadow','text-center')
    
    let imagen= document.createElement('img')
    imagen.classList.add("img-fluid","w-100","my-3")
    imagen.src=comida.imagen

    let nombreEtiqueta=document.createElement('h4')
    nombreEtiqueta.textContent=comida.nombre



    fila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombreEtiqueta)   


    tarjeta.addEventListener('click',function(evento){

        let  paqueteDos= detectarComidaFiltro(evento)
        console.log(paqueteDos)
        
        sessionStorage.setItem('paqueteDos',JSON.stringify(paqueteDos))  
         
        
        window.location.href='./comidaFiltro2.html'
        
        
     })
        

    
})
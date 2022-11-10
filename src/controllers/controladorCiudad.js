//funcion autoinvocada
let ponerCiudad

(async()=> {
    let ciudadUbicacion=document.getElementById('ciudad')
    
    const {value:ciudad} = await Swal.fire({
        title: "Bienvenido",
        text: "Selecciona tu ciudad",
        confirmButtonText: "Seleccionar",
        padding: "2rem",
        position: "center",
        backdrop:true,
        timer:10000,
        allowOutsideClick: false,
        allowEscapeKey:false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        input: "select", 
        inputPlaceholder:"Ciudad",
        inputOptions:{
            Armenia:"Armenia",
            Barranquilla:"Barranquilla",
            Bogota: "Bogota",
            Cali:"Cali",
            Cartagena: "Cartagena",
            Manizales: "Manizales",
            Medellin: "Medellin",
            Pereira: "Pereira"
    
        }
        
    });
   let city=ciudad
   sessionStorage.setItem('ciudad',city)
 
   ciudadUbicacion.textContent=ponerCiudad    
})()
let ciudadUbicacion=document.getElementById('ciudad')
ponerCiudad=sessionStorage.getItem('ciudad')


ciudadUbicacion.textContent=ponerCiudad



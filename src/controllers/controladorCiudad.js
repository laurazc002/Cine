//funcion autoinvocada
(async()=> {
    
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

    if(ciudad){
        alert(ciudad)
    }

})()


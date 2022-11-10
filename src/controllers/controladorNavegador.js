let ciudad= JSON.stringify(sessionStorage.getItem('ciudad'))
alert(ciudad)
let icono=document.getElementById('icono')
let container=document.getElementById('container')

icono.addEventListener('click',function(){
container.setAttribute('class','abre')

})

container.addEventListener('mouseleave',function(){
container.setAttribute('class','container-lista')
})
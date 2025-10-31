
// otras formas de añadir eventos click a elementos
// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }


/* const boton = document.querySelector("#boton-importante")
//devuelve el primer elemento

  boton.addEventListener("click", function responseClick(){
    boton.textContent = '¡Aplicado!' //textContent propiedades que tiene  el elemento
    boton.style.backgroundColor = '#4caf50' //otra propiedad
    boton.disabled = true //desactivado otra propiedad
    
  }) */

 //const botones = document.querySelectorAll('.button-apply-job')
// devuelve un NodeList (array-like) con todos los botones que encuentre
// o una lista vacia [] si no encuentra ninguno

/*  botones.forEach(boton => {
   boton.addEventListener('click', function() {
     boton.textContent = '¡Aplicado!'
     boton.classList.add('is-applied')
     boton.disabled = true
   })
 }) */

 
//busco dentro de la section el evento click event delegation (burbujea)

 const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection?.addEventListener('click', function(event) {
  const element = event.target
//si el elemento de la lista contiene la clase "button-apply-job"
  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})
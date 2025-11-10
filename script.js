
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

 //const jobsListingSection = document.querySelector('.jobs-listings')

//jobsListingSection?.addEventListener('click', function(event) {
  //const element = event.target
//si el elemento de la lista contiene la clase "button-apply-job"
  //if (element.classList.contains('button-apply-job')) {
    //element.textContent = '¡Aplicado!'
    //element.classList.add('is-applied')
    //element.disabled = true
  //}
//})

//const filterTechnology = document.getElementById('filter-technology')

//filterTechnology.addEventListener('change', function () {
  //console.log('Tecnología seleccionada:', filterTechnology.value)
//})

//const filter = document.querySelector('#filter-location')
//const mensaje = document.querySelector('#filter-selected-value')

//filter.addEventListener('change', function () {
  //const jobs = document.querySelectorAll('.job-listing-card')

  //const selectedValue = filter.value

  //if (selectedValue) {
    //mensaje.textContent = `Has seleccionado: ${selectedValue}`
  //} else {
    //mensaje.textContent = ''
  //}

  //jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    //const modalidad = job.getAttribute('data-modalidad')
    //const isShown = selectedValue === '' || selectedValue === modalidad
    //job.classList.toggle('is-hidden', isShown === false)
  //})
//})


console.log("Antes del Fetch");
fetch("./data.json") /* fetch es asíncrono */
  .then((response) => { //promesas
    return response.json();
  })
  .then((jobs) => {
      console.log ("Tengo los resultados del fetch")
      console.log (jobs)
    })
    console.log("despues del fetch")

///////////////////////////////////////////////////////

const container = document.querySelector('.jobs-listings')



fetch("./data.json") /* fetch es asíncrono */
  .then((response) => {
    return response.json();
  })
  .then((jobs) => {
    jobs.forEach(job => {
      const article = document.createElement('article')
      article.className = 'job-listing-card'
      
      article.dataset.modalidad = job.data.modalidad
      article.dataset.nivel = job.data.nivel
      article.dataset.technology = job.data.technology

      article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`

      container.appendChild(article)
    })
  });
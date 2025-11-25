const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')

filter.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')
  console.log (jobs)

  const selectedValue = filter.value
  console.log(selectedValue)

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)
  })
})
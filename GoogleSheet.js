const scriptURL = 'https://script.google.com/macros/s/AKfycbzCV4TVTqGp9SyD_J2jxC5zEVjJpzn6TU71LIqcf1dbsw7VDdRvfYpItpJ_XhOh75fa/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target)
  const formValues = Object.fromEntries(formData.entries())
  console.log(formValues)
})
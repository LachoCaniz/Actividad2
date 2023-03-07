// Obtenemos el formulario
const form = document.querySelector('form');

// Agregamos un evento al formulario para que se ejecute cuando se envíe
form.addEventListener('submit', (event) => {
  // Prevenimos que el formulario se envíe de manera predeterminada
  event.preventDefault();

  // Obtenemos los valores de los campos del formulario
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  const birthdate = form.birthdate.value;

  // Validamos los campos del formulario
  if (!username || !email || !password || !birthdate) {
    alert('Por favor, completa todos los campos.');
    return;
  }else{
    alert('Bienvenido: '+ username)
  }

  // Enviamos el formulario
  form.submit();

});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav_toggle');
    const heroCtas = document.getElementById('heroCtas');
  
    navToggle.addEventListener('click', function () {
      // Toggle la clase 'hidden' en el contenedor de las CTA
      heroCtas.classList.toggle('hidden');
    });
  });
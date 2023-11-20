const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".navbar-right");
const header = document.querySelector(".header");
const overlay = document.getElementById('overlay');

// Manejar clic en el botón de navegación
navToggle.addEventListener("click", () => {
    menu.classList.toggle("navbar-right_visible");
    overlay.style.display = menu.classList.contains('navbar-right_visible') ? 'block' : 'none';
});

// Seleccionar todos los enlaces del menú que apuntan a secciones internas
const menuLinks = document.querySelectorAll('.nav-menu-link[href^="#"]');

// Crear un observador de intersección para resaltar enlaces de menú cuando se desplazan a secciones
const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.nav-menu-link[href="#${id}"]`);

        if(entry.isIntersecting) {
            document.querySelector('.nav-menu-link_active').classList.remove('nav-menu-link_active')
            menuLink.classList.add('nav-menu-link_active');
        }
    });
}, 
    { rootMargin: "-30% 0px -70% 0px" }
)

// Manejar clic fuera del menú para cerrarlo
document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !header.contains(event.target)) {
      // Cerrar el menú si se hace clic fuera de él
      menu.classList.remove('navbar-right_visible');
      overlay.style.display = 'none';
    }
  });

// Asociar eventos a los enlaces del menú para cerrar el menú y ocultar el overlay al hacer clic en ellos
menuLinks.forEach( (menuLink) => {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('navbar-right_visible');
        overlay.style.display = 'none';
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);

    // Observar la sección para resaltar el enlace de menú cuando se desplaza a ella
    if (target) {
        observer.observe(target);
    }
});



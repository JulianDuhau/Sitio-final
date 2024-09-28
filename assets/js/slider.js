let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.custom-navbar'); // Cambiado a custom-navbar

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// Seleccionamos el botón y el modal específicos del contacto
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const contactCloseBtn = contactModal.querySelector('.close');

// Mostrar el modal de contacto al hacer clic en el botón "Contact"
contactBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace recargue la página
    contactModal.style.display = 'block';
});

// Cerrar el modal de contacto al hacer clic en el botón "Cerrar" (X)
contactCloseBtn.addEventListener('click', function() {
    contactModal.style.display = 'none';
});

// Cerrar el modal de contacto si el usuario hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = 'none';
    }
});

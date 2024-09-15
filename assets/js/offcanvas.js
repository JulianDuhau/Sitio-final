//offcanvas
// Escucha cuando se haga clic en los enlaces del menú
document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElement = document.getElementById('top-navbar');
    var offcanvas = new bootstrap.Offcanvas(offcanvasElement);

    // Selecciona todos los enlaces dentro del offcanvas
    document.querySelectorAll('.offcanvas a').forEach(function (el) {
        el.addEventListener('click', function () {
            offcanvas.hide(); // Cierra el offcanvas
        });
    });
});
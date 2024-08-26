function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    var sidenav = document.getElementById("mySidenav");
    var openButton = document.querySelector('.openbtn');
    
    // Comprobar si el clic está fuera del menú y fuera del botón de apertura
    if (sidenav.style.width === "250px" && !sidenav.contains(event.target) && !openButton.contains(event.target)) {
        closeNav();
    }
});

// Evitar que el clic en el botón de apertura cierre el menú inmediatamente
document.querySelector('.openbtn').addEventListener('click', function(event) {
    event.stopPropagation(); // Esto evita que el evento de clic en el botón sea propagado y cierre el menú
    openNav();
});
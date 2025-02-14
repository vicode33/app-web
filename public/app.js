document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".ul");
    const menuLinks = document.querySelectorAll(".ul .a"); // Seleccionamos todos los enlaces

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    
    alert("Formulario enviado con éxito!");
    this.reset();
});
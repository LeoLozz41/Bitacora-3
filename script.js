document.addEventListener("DOMContentLoaded", () => {
    // Añadir animación de aparición retardada para las entradas de la bitácora
    const entries = document.querySelectorAll(".entry");
    entries.forEach((entry, index) => {
        entry.style.setProperty("--i", index);
    });

    // Funcionalidad para el botón "Leer más"
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Cargando contenido completo de la entrada...");
        });
    });
});

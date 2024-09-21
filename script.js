document.getElementById("showMessageButton").addEventListener("click", function() {
    // Mostrar mensaje animado
    const message = document.getElementById("message");
    message.classList.remove("hidden");
    message.style.opacity = 1;

    // Generar flores
    const flowersContainer = document.getElementById("flowersContainer");
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flowersContainer.appendChild(flower);
    }
});

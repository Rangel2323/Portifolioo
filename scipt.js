let botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {

        botaoTema.textContent = "🌙";

    } else {

        botaoTema.textContent = "☀️";

    }

});







const tituloOriginal = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "Volte aqui :(";
    } else {
        document.title = tituloOriginal;
    }
});






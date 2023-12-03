let registracionSW;
navigator.serviceWorker.register("/pokedex-js/sw.js").then(registracion => {
    registracionSW = registracion;
});

let bip = null;

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    bip = event;
});

document.addEventListener("DOMContentLoaded", event => {

    document.querySelector("#btn-instalar").addEventListener("click", () => {
        if (bip) {
            bip.prompt();
        } else {
            document.querySelector("#btn-instalar").style.display = "none";
        }
    });

})
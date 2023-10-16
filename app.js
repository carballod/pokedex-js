let registracionSW;
navigator.serviceWorker.register("/sw.js").then(registracion => {
    registracionSW = registracion;
});

let bip = null;

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    bip = event;
});

document.addEventListener("DOMContentLoaded", event => {

    document.querySelector("#btn-instalar").addEventListener("click", async (event) => {
        if (bip) {
            bip.prompt();
        } else {
            alert("No hay nada para instalar");
        }
    });

})
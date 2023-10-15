
self.addEventListener("install", async () => {
    const cache = await caches.open("recursos");
    await cache.addAll([
        "/", "style.css", "img/logo.png", "icon/maskable_icon512.png", "main.js",
        "/src/ui/buscador.js", "/src/ui/mostrarPokemon.js", "/src/ui/paginaActual.js", "/src/ui/paginador.js","/src/ui/recargarPagina.js",
        "/src/mapeadores/mapearPokemon.js", "/src/entidades/pokemon.js", "/src/api/pokemonAPI.js",
        "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap",
        "https://pokeapi.co/api/v2/pokemon"
    ]);

    console.log("Instalando el service worker y guardando en cache los recursos");
});

self.addEventListener("activate", (event) => {});

// Sirve los archivos desde el cache
self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const cache = await caches.open("recursos");

    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
        const networkResponse = await fetch(request);
        cache.put(request, networkResponse.clone()); 
        return cachedResponse;
    }
  
    const networkResponse = await fetch(request);
    return networkResponse;
}

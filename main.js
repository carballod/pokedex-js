const listaPokemon = document.getElementById('listaPokemon');
const URL = 'https://pokeapi.co/api/v2/';


for (let i = 1; i <= 151; i++) {
    fetch(`${URL}pokemon/${i}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}




/*
<div class="pokemon">
            <p class="pokemon-id-back">#03</p>
            <div class="pokemon-imagen">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                alt="Charmander"
              />
            </div>
            <div class="pokemon-info">
              <div class="nombre-contenedor">
                <p class="pokemon-id">#03</p>
                <h2 class="pokemon-nombre">Charmander</h2>
              </div>
              <div class="pokemon-tipos">
                <p class="tipo">Fuego</p>
                <p class="tipo">Fuego</p>
              </div>
              <div class="pokemon-stats">
                <p class="stats">4m</p>
                <p class="stats">60kg</p>
              </div>
            </div>
          </div>
*/
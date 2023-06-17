const listaPokemon = document.querySelector("#lista-pokemon");
const URL = "https://pokeapi.co/api/v2/";

for (let i = 1; i <= 151; i++) {
  fetch(`${URL}pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data))
    .catch((error) => console.log(error));
}

const mostrarPokemon = (data) => {
  const tipos = data.types.map((tipo) => 
    
      `<p class="tipo">${tipo.type.name}</p>`
    )
  .join("");

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
    <p class="pokemon-id-back">#${data.id}</p>
    <div class="pokemon-imagen">
      <img
        src="${data.sprites.other.dream_world.front_default}"
        alt="${data.name}"
      />
    </div>
    <div class="pokemon-info">
      <div class="nombre-contenedor">
        <p class="pokemon-id">#${data.id}</p>
        <h2 class="pokemon-nombre">${data.name}</h2>
      </div>
      <div class="pokemon-tipos">
        ${tipos}
      </div>
      <div class="pokemon-stats">
        <p class="stats">${data.height}M</p>
        <p class="stats">${data.weight}KG</p>
      </div>
    </div>`;
  listaPokemon.appendChild(div);
};

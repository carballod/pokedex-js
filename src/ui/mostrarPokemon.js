const listaPokemon = document.querySelector("#lista-pokemon");

export const mostrarPokemon = (pokemon) => {
  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
    <p class="pokemon-id-back">#${pokemon.id}</p>
    <div class="pokemon-imagen">
      <img
        src="${pokemon.foto}"
        alt="${pokemon.nombre}"
      />
    </div>
    <div class="pokemon-info">
      <div class="nombre-contenedor">
        <p class="pokemon-id">#${pokemon.id}</p>
        <h2 class="pokemon-nombre">${pokemon.nombre}</h2>
      </div>
    </div>`;
  listaPokemon.appendChild(div);
};

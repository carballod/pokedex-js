import Pokemon from "../entidades/pokemon.js";

const listaPokemon = document.querySelector("#lista-pokemon");

export const mostrarPokemon = (data) => {
  const pokemon = new Pokemon(
    data.id,
    data.name,
    data.sprites.other.dream_world.front_default,
    data.types.map((tipo) => tipo.type.name),
    data.abilities.map((habilidad) => habilidad.ability.name),
    data.moves.map((movimiento) => ({
      movimiento: movimiento.move.name,
      versiones: movimiento.version_group_details.map(
        (version) => version.version_group.name
      ),
    }))
  );

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

import Pokemon from "../entidades/pokemon.js";

export const mapearPokemon = (data) => {
  return new Pokemon(
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
};

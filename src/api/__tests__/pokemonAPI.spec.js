import { obtenerDatosPokemon } from "../pokemonAPI";

const URL = "https://pokeapi.co/api/v2/pokemon/1";
const pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: [{ 
    type: {name: "grass"} 
  }],
};

describe("funcion obtenerDatosPokemon", () => {
  // simula la función fetch
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(pokemon),
    });
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("llama al fetch con la URL correcta", async () => {
    await obtenerDatosPokemon(URL);
    expect(fetch).toHaveBeenCalledWith(URL);
  });

  test("devuelve correctamente los datos del pokemon", async () => {
    const data = await obtenerDatosPokemon(URL);
    expect(data).toEqual(pokemon);
  });

  test("devuelve un error si falla la peticion", async () => {
    // simula que el test falla
    fetch.mockRejectedValueOnce(new Error("fetch failed"));
    await expect(obtenerDatosPokemon(URL)).rejects.toThrow("fetch failed");
  });
});

describe("Pokedex Test", () => {

  before(() => {
    cy.visit("index.html");
  });


  it("Carga los elementos de la pagina correctamente", () => {
    cy.title().should("eq", "Pokedex");

    cy.get("#pokemon-logo").should("be.visible"); 
    cy.get("#pokemon-logo").should("have.attr","src","./img/logo.png");

    cy.get("#buscador").should("exist");
    cy.get(".buscador-btn").should("exist");

    cy.get("#lista-pokemon").should("exist");
    cy.get(".pokemon-todos").should("exist");
  });


  it("Puede recargar la página haciendo clic en el logotipo", () => {

    cy.get("#pokemon-logo").click(); 
    cy.wait(2000);
    cy.location("pathname").should("eq", "/index.html"); 
  });

  it("Puede buscar un pokemon por ID", () => {
    const pokemonId = 25; // ID del Pokémon a buscar

    cy.get("#buscador").type(pokemonId); // Ingresa el ID del Pokémon en el campo de búsqueda
    cy.get("#buscar-pokemon").click(); // Hace clic en el botón de búsqueda

    cy.get(".pokemon-nombre").should("contain", "Pikachu"); 
  });

});

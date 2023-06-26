describe("Pokedex Test", () => {

  before(() => {
    cy.visit("/index.html");
  });

  it("Muestra los primeros 151 Pokémon", () => {
    cy.get(".pokemon").should("have.length", 151);
  });
  
  it("Carga los elementos de la página correctamente", () => {
    cy.title().should("eq", "Pokedex");
  
    cy.get("#pokemon-logo").should("be.visible");
    cy.get("#pokemon-logo").should("have.attr", "src", "./img/logo.png");
  
    cy.get("#buscar-pokemon").should("be.visible");
    cy.get("#lista-pokemon").should("be.visible");
  });

})

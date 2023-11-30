/// <reference types="cypress" />
beforeEach( () => {
  cy.viewport(1280, 720)
})



describe("Consulter une Liste de Voitures", () => {

  //1. Assurer le bon affichage de la page d'accueil du site 
  it("Affiche la page d'accueil", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#");
    cy.title().should("equal", "Stock car");
  });

  // 2. Vérifier le bon affichage de la liste des voitures 
  it("Affiche la liste de voitures", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#");
    cy.get("#listeVoiture").should("be.visible");
  });
  

  it("Affiche les informations des voitures", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#");
    cy.get('#listeVoitureTable')
    .find('tbody tr:first')
    .find('td')
    .first()
    .should('have.text', 'ZOE')
});

 /// <reference types="cypress" />
  describe("Test de recherche de voiture", () => {
   it("Effectuer une recherche de voiture", () => {
     cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#")
     //Remplir le champ recherche
      cy.get('#saisieRecherche').type('Renault');
     //Click sur le bouton pour la lancer la recherche de voitures
      cy.get('.rechercher').click()
      //Parcourir le tableau ou sont stockées les voitures
      cy.get('#listeVoitureTable')
          .find('tbody tr:last')
          .find('td')
          .first()
          .should('have.text', 'Renault')

    });
 });


 //Test pour le bouton 

 /*describe("Ajout d'une nouvelle voiture", () => {
  it("devrait ajouter une voiture avec succès", () => {
    // Visitez la page où se trouve le formulaire pour ajouter une voiture
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#"); // Assurez-vous d'ajuster l'URL à la vôtre.

    cy.get("#nouvelle").invoke("show").should("be.visible");

    // Remplissez le formulaire
    cy.get('#marque').type('PEU'); 
    cy.get('#modele').type('Camry');
    cy.get('#finition').type('FinitionTest'); 
    cy.get('#carburant').select('Essence');
    cy.get('#km').type('50000');
    cy.get('#annee').type('2020');
    cy.get('#prix').type('25000');

    // Cliquez sur le bouton "Ajouter"
    cy.get("#nouvelleVoiture").click();

    // Vérifiez que le message de succès s'affiche
    cy.get('#snackbar_ajout').should('contain', 'La voiture a été ajoutée avec succès');

    // Vous pouvez également vérifier que la voiture apparaît dans le tableau
    cy.get('#listeVoitureTable tbody tr').should('have.length.greaterThan', 0); 
    cy.get('#listeVoitureTable tbody tr:first td').should('contain', 'Toyota');
    cy.get('#listeVoitureTable tbody tr:first td').should('contain', 'Camry');
    cy.get('#listeVoitureTable tbody tr:first td').should('contain', 'FinitionTest'); 
  });
});*/


describe("Ajouter une voiture", () => {

  it("Ajout d'une voiture", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#");
    cy.get('li a:contains("Ajouter une voiture")').click({ force: true });
  });
});
   


});

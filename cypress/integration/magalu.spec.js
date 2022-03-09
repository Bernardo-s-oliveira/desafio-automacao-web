import homeMagalu from '../support/action/accessPage'
import searchProduct from '../support/action/searchProduct'

describe("Comércio online - Magazine Luiza", () =>{

    it("Pesquisar produto e adicionar no carrinho de compras", () => {
        homeMagalu.go();
        searchProduct.fieldSearch("Notebook Dell Inspiron i3501-M10P {enter}");
        cy.wait(1000);
        cy.contains('h2','Notebook Dell Inspiron i3501-M10P').click();
        cy.contains('span', 'Adicionar à sacola').as('addCarts');
        cy.get('@addCarts').click();
        cy.contains('p', 'Notebook Dell Inspiron i3501-M10P').should('be.visible');
        cy.reload();
        cy.contains('p', 'Notebook Dell Inspiron i3501-M10P').should('be.visible');
    });

    it("Pesquisar produto inexistente", () => {
        homeMagalu.go();
        searchProduct.fieldSearch("produto inexistente {enter}");
        searchProduct.validateReturnFromSearch().should('contain','Sua busca por "produto inexistente" não encontrou resultado algum :(');
    });

    it("Pesquisar com caracter especial", () => {
        homeMagalu.go();
        searchProduct.fieldSearch("!{enter}");
        cy.wait(1000)
        searchProduct.validateReturnFromSearch().should('contain','Sua busca não encontrou resultado algum :(');                                                                                                             
    });
});         
import magalu from '../support/action/SiteMagalu'

describe("Acessando site", () =>{
    //beforeEach(() => 

    it.only("Pesquisar produto existente", () => {
        magalu.acessarPagina();
        magalu.campoPesquisar("Notebook Dell Inspiron i3501-M10P {enter}");
        magalu.msgValidaRetornoDaPesquisa().should('contain',"Notebook Dell Inspiron i3501-M10P");
        cy.wait(1000);
        cy.get('[data-testid="product-title"]').as('produtoEscolhido');
        cy.get('@produtoEscolhido').contains('Notebook Dell Inspiron i3501-M10P').click();
        cy.get('.wrapper-product__informations > .button__buy').as('adicionarNaSacola');
        cy.get('@adicionarNaSacola').click();
        cy.url().should('include', 'https://sacola.magazineluiza.com.br/#/');
        cy.get('.BasketItemProduct').as('produtoNoCarrinho');
        cy.get('@produtoNoCarrinho').contains('Notebook Dell Inspiron i3501-M10P').click();
       
    });

    it("Pesquisar produto inexistente", () => {
        magalu.acessarPagina();
        magalu.campoPesquisar("produto inexistente {enter}");
        magalu.msgInvalidaRetornoDaPesquisa().should('contain','Sua busca por "produto inexistente" não encontrou resultado algum :(');
    });

    it("Pesquisar com caracter especial", () => {
        magalu.acessarPagina();
        magalu.campoPesquisar("!{enter}");
        cy.wait(1000)
        magalu.msgInvalidaRetornoDaPesquisa().should('contain','Sua busca por "!" não encontrou resultado algum :(');                                                                                                             
    });

    
});         
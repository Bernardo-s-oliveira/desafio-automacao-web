class SiteMagalu{

    acessarPagina(){
        cy.visit("https://www.magazineluiza.com.br/");
        cy.viewport(1920,1080);
    }
    
    campoPesquisar(nomeProduto){
        cy.get("#input-search").type(nomeProduto);
    }

    msgValidaRetornoDaPesquisa(){
        return cy.get('[data-testid="mod-l"]')
    }
    msgInvalidaRetornoDaPesquisa(){
       return cy.get('[data-testid="mod-a"] > [data-testid="text-list-container"] > [data-testid="text-list-title"]')
    }
}

export default new SiteMagalu();
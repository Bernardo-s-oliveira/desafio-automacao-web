class accessPage{
    go(){
        cy.visit("https://www.magazineluiza.com.br/");
        cy.viewport(1920,1080);
    }
}

export default new accessPage();
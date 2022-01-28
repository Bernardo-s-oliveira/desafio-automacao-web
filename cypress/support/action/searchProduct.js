class searchProduct{
    fieldSearch(productName){
        cy.get("#input-search").type(productName);
    }

    validateReturnFromSearch(){
        return cy.get('h1[data-testid="text-list-title"]')
    }
}

export default new searchProduct();
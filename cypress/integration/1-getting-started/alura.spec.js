describe('Alura busca Cursos', () => {
    beforeEach(()=> {
        cy.visit('https://www.alura.com.br/');
    })
    it('Buscar curso na Alura', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos');
    })

})
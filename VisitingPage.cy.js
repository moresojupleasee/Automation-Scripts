describe('front end', () => {
  it('Visit a webpage', () => {
    cy.visit('https://example.cypress.io') // open the page
    cy.contains('type').click() // clicks directly on an element
    cy.url().should('include', '/commands/actions') //checking url string using include

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

    cy.get('.action-focus').type('12345').should('have.value', '12345') //getting an element using class id and asserting using have.value
  })
})

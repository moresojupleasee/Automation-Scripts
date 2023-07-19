describe('Login to 9anime', () => {
  it('Sign in a valid user', () => {
    cy.visit('https://www.beamjobs.com/')
    cy.contains('Sign in').click()
    cy.url().should('include', 'https://www.beamjobs.com/resume-builder/auth')
    cy.get('.mat-input-element')
      .first()
      .type('hibikag284@msback.com')
      .should('have.value', 'hibikag284@msback.com')
    cy.get('.mat-input-element').last().type('12345678')
    cy.get('.mat-focus-indicator').last().click()
    cy.get('.ng-star-inserted').should('be.visible')

    // cy.url().should(
    //   'include',
    //   'https://www.beamjobs.com/resume-builder/dashboard'
    // )
  })
})

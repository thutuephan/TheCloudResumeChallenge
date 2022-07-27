// This test is to make sure my API returns an updated value

describe('My First Test', () => {
  it('successfully loads', () => {
    cy.visit('https://alicezenmind.com')

    cy.contains('email').click()

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.counter')
    cy.get('#banner')
    cy.get('#fetch')
    
  })
})

describe('My Second Test', () => {
  it('successfully loads', () => {
    cy.visit('https://alicezenmind.com')

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.navigation')
      .should('exist')
      .contains('GITHUB')
    
  })
})


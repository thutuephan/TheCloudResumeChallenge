describe('My First Test', () => {
  it('Get the visitor counts of the website', () => {
    cy.visit('https://alicezenmind.com')

    cy.contains('email').click()

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.counter')

  })
})
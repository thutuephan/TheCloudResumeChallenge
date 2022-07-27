// This test is to make sure my API returns an updated value

describe('My First Test', () => {
  it('successfully loads', () => {
    cy.visit('https://alicezenmind.com')

    cy.contains('email').click()
    cy.get("h3")

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.counter')
    cy.get('#banner')
    
  })

  it('the features on the homepage are correct', () => {
    cy.visit('https://alicezenmind.com')

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.navigation')
      .should('exist')
      .contains('GITHUB')
    
  })

  // In the above two tests, I used classes and ids to test, which tend to change over time. They are things that are tied to things like design, layout or the styling of the page. So instead of using classes and ids, they recommend dev to use data attributes on your elements. So I'm gonna use something called the data hyphen test attribute. It's simply targeting the data test attribute that's only used for cypress test.

// I'm gonna update my tests using data attributes

// "only" keyword will make cypress run only the specific one. If I want to test all, remove the "only" keyword

  it.only('the features on the homepage are correct', () => {
    cy.visit('https://alicezenmind.com')

    cy.get('#fetch')
    cy.get('data')
  })

})







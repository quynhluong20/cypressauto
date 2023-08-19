describe('testing', () => {

  it('TH1', () => {
    cy.visit("https://facebook.com")
    cy.title().should('eq','Facebook – log in or sign up')
  })
  it('TH2', () => {
    cy.visit('https://www.facebook.com')
    cy.title().should('eq','facebook123')
  })
})
describe('form spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/KontaktSkjema')
  })

  it('is submit button deactivated when form content is invalid', () => {
    cy.get('[placeholder="Enter your name"]').type('w ')
    cy.get('[placeholder="Enter your email"]').type('invalidEmail')
    cy.get('[placeholder="Enter your feedback"]').type('invalidMessage')
    cy.get('[type="submit"]').should('be.disabled')
  })

  it('successfully submits form', () => {
    cy.get('[placeholder="Enter your name"]').type('validName')
    cy.get('[placeholder="Enter your email"]').type('validEmail@ve.com')
    cy.get('[placeholder="Enter your feedback"]').type('validMessagevalidMessagevalidMessagevalidMessagevalidMessage')
    cy.get('[type="submit"]').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Form successfully submitted, Status code: 201')
    })
  })
})
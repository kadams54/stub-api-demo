describe('Stub API Demo', function() {
  it('Checks for the proper favorite movie', function() {
    // If the OMDB call is stubbed out, it should return "Thor: Ragnarok"
    // instead of "Guardians of the Galaxy Vol. 2".
    cy.visit('/').contains('Thor: Ragnarok')
  })
})
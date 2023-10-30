describe('Redirects', () => {
  // article ID for e2e testing.

  it('Legacy article form slug should navigate to the localized article page', () => {
    cy.visit(
      encodeURI('http://localhost:3003/hc/fr/articles/4415553649815-some-slug')
    );
    cy.url().should('eq', 'http://localhost:3003/fr/articles/4415553649815');
  });

  it('Default home page visit should redirect to locale select', () => {
    cy.visit(encodeURI('http://localhost:3003'));
    // '%2F' corresponds to '/'.
    cy.url().should('eq', 'http://localhost:3003/locale-select?target=%2F');
  });
});

// Prevent TypeScript from reading file as legacy script.
export {};

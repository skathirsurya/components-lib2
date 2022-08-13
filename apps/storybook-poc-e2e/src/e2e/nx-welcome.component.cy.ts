describe('storybook-poc', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('components-lib2-nx-welcome').should('exist');
  });
});

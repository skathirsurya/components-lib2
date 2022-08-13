describe('storybook-poc', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('components-lib2-root').should('exist');
  });
});

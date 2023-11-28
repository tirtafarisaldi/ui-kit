describe('foundation-ui: FoundationUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=foundationui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FoundationUi!');
    });
});

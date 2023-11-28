describe('global-ui: GlobalUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=globalui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to GlobalUi!');
    });
});

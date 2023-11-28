describe('popbela-ui: PopbelaUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=popbelaui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PopbelaUi!');
    });
});

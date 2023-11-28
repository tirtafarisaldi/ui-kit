describe('yummy-ui: YummyUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=yummyui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to YummyUi!');
    });
});

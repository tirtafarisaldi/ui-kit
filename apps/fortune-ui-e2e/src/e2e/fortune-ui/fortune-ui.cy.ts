describe('fortune-ui: FortuneUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fortuneui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FortuneUi!');
    });
});

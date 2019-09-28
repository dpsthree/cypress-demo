import { usernameInput } from '../support/app.po';

describe('gdg-clicker', () => {
  it('should display usename input', () => {
    cy.visit('/');
    usernameInput().should('be.visible');
  });
});

import {
  chooseAvatar,
  clickerButton,
  nextButton,
  usernameInput
} from '../support/app.po';

describe('gdg-clicker', () => {
  it('should display usename input', () => {
    cy.visit('/');
    usernameInput().should('be.visible');
  });

  it('requires a user to enter a name and select an avatar', () => {
    cy.visit('/');
    nextButton().should('be.disabled');
    usernameInput().type('@TheEvergreenDev');
    nextButton().should('be.disabled');
    usernameInput().clear();
    chooseAvatar('square', 'blue');
    nextButton().should('be.disabled');
    usernameInput().type('@TheEvergreenDev');
    nextButton().should('be.enabled');
    usernameInput().clear();
  });

  it('navigates to the game after selecting avatar', () => {
    cy.visit('/');
    usernameInput().type('@TheEvergreenDev');
    chooseAvatar('square', 'blue');
    nextButton().click();
    clickerButton().should('be.visible');
  });
});

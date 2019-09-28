import {
  chooseAvatar,
  clickerButton,
  gameoverMessage,
  nextButton,
  score,
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

  it('should increment the score as the button is pressed', () => {
    cy.visit('/');
    usernameInput().type('@TheEvergreenDev');
    chooseAvatar('square', 'blue');
    nextButton().click();
    score().should('contain.text', '0');
    clickerButton().click();
    score().should('contain.text', '1');
  });

  it('should rack up a score before ending the game', () => {
    cy.visit('/');
    usernameInput().type('@TheEvergreenDev');
    chooseAvatar('square', 'blue');
    nextButton().click();
    for (let x = 0; x < 100; x++) {
      clickerButton().click();
    }
    score().should('contain.text', '100');
    gameoverMessage().should('be.visible');
  });
});

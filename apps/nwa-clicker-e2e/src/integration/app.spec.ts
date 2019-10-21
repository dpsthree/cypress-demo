import {
  chooseAvatar,
  clickerButton,
  gameoverMessage,
  leaders,
  nextButton,
  score,
  scoreboardButton,
  scoreboardError,
  scoreboardTitle,
  usernameInput
} from '../support/app.po';

describe('nwa-clicker', () => {
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
    for (let x = 0; x < 50; x++) {
      clickerButton().click();
    }
    score().should('contain.text', '50');
    gameoverMessage().should('be.visible');
  });

  it('should disable the clicker and display the scoreboard button at the end of a game', () => {
    cy.visit('/');
    usernameInput().type('@TheEvergreenDev');
    chooseAvatar('square', 'blue');
    nextButton().click();
    for (let x = 0; x < 50; x++) {
      clickerButton().click();
    }
    gameoverMessage().should('be.visible');
    clickerButton().should('be.disabled');
    scoreboardButton().should('be.visible');
  });

  it('should navigate to the scoreboard', () => {
    cy.visit('/');
    usernameInput().type('@TheEvergreenDev');
    chooseAvatar('square', 'blue');
    nextButton().click();
    for (let x = 0; x < 50; x++) {
      clickerButton().click();
    }
    scoreboardButton().click();
    scoreboardTitle().should('be.visible');
  });

  it('should display the scores', () => {
    cy.visit('/scoreboard');
    scoreboardTitle().should('be.visible');
    leaders().should('be.visible');
  });

  it('should handle API errors gracefully', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/api/scores',
      status: 500,
      response: { message: 'bad' }
    });
    cy.visit('/scoreboard');
    scoreboardTitle().should('be.visible');
    scoreboardError().should('be.visible');
  });
});

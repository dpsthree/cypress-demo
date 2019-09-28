export const usernameInput = () => cy.get('input');
export const nextButton = () => cy.contains('Next');
export const clickerButton = () => cy.get('.clicker-button');
export const score = () => cy.get('.score');
export const gameoverMessage = () => cy.get('.gameover', { timeout: 10000 });
export const scoreboardButton = () => cy.get('.scoreboard-button');
export const scoreboardTitle = () => cy.get('.scoreboard-title');
export const leaders = () => cy.get('.leaders');

const avatarOfShape = (shape: string) => cy.get(`.${shape}`);
const avatarColor = (color: string) => cy.get(`.${color}`);

export function chooseAvatar(shape: string, color: string) {
  avatarOfShape(shape).click();
  avatarColor(color).click();
}

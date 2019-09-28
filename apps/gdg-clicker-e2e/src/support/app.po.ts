export const usernameInput = () => cy.get('input');
export const nextButton = () => cy.contains('Next');

const avatarOfShape = (shape: string) => cy.get(`.${shape}`);
const avatarColor = (color: string) => cy.get(`.${color}`);

export function chooseAvatar(shape: string, color: string) {
  avatarOfShape(shape).click();
  avatarColor(color).click();
}

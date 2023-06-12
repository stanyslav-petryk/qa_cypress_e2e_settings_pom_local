import PageObject from '../PageObject';

class SettingsPageObject extends PageObject {
  url = '/settings';

  clickOnUpdate() {
    cy.getByDataCy('settings-btn-update')
      .click();
  }

  get usernameField() {
    return cy.getByDataCy('settings-username');
  }

  typeUsername(name) {
    this.usernameField
      .clear()
      .type(name);
  }

  typeBio(bio) {
    cy.getByDataCy('settings-bio')
      .clear()
      .type(bio);
  }


  typeEmail(email) {
    cy.getByDataCy('settings-email')
      .clear()
      .type(email);
  }

  checkEmailValue(email) {
    cy.getByDataCy('settings-email')
      .should('have.value', email)
  }

  typePassword(password) {
    cy.getByDataCy('settings-password')
      .type(password)
  }

  clickOnlogout() {
    cy.getByDataCy('settings-logout-btn')
      .click();
  }

}

export default SettingsPageObject;
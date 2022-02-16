const { assert } = require("chai");

const LOGIN_ERR_TXT = "#flash-messages";
const USER_NAME_TXTBX = 'input[name=email]';
const PASSWORD_TXTBX = 'input[name=password]';
const LOGIN_BTN = '.btn-signin';
const LOGIN_ERROR_ALERT = "div.container > div.ct-container-login-page.box-fix-column > div.form-login-right.box-fix-with > form > div.alert.alert-danger > ul > li";
class Login {

    waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDislayed(15000);
    }

    getLoginErrorText(){
        return $(LOGIN_ERR_TXT).getText();
    }

    inputUsername(username) {
        $(USER_NAME_TXTBX).setValue(username);
        return this;
    }

    inputPassword(password) {
        $(PASSWORD_TXTBX).setValue(password);
        return this;
    }

    clickOnLoginBtn() {
        $(LOGIN_BTN).click();
        return this;
    }

    verifyInvalidUsernameText(){
        let currentLoginErr = this.getLoginErrorText();
        let expectedErrText = "Your username is invalid!";

        expect(currentLoginErr).to.include(expectedErrText);
    }

    verifyInvalidPasswordText(){
        let currentLoginErr = this.getLoginErrorText();
        let expectedErrText = "Your password is invalid!";

        expect(currentLoginErr).to.include(expectedErrText);
    }

    verifyErrorExist(){
        let isExisting = $(LOGIN_ERROR_ALERT).isExisting();
        expect(isExisting).to.be.true;
    }
}
module.exports = new Login();
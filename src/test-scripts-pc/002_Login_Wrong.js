let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects-pc/Login');

describe('LOGIN', () => {

    const INVALID_LOGIN = LoginData.INVALID_LOGIN;

    before(() => {
        browser.url('/login');
    });

    it('Login_invalid', () => {
        LoginPage
            .inputUsername(INVALID_LOGIN.username)
            .inputPassword(INVALID_LOGIN.password)
            .clickOnLoginBtn();

        LoginPage.verifyErrorExist();
    });

});
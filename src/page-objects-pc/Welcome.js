const WELCOME_TXT = ".subheader";
const LOGOUT_BTN = ".li-logout > a";
class Welcome {

    getWelcomeText() {
        $(WELCOME_TXT).waitForDisplayed(15000);

        let welcomeText = $(WELCOME_TXT).getText();
        return welcomeText;
    }
   
    verifyWelcomeText(){
        let currentWelcomeText = this.getWelcomeText();
        let expectedWelcomeText = "Welcome to the Secure Area. When you are done click logout below.";
        const VERIFICATION_ERR = '[ERR] WRONG welcome Text';

        expect(currentWelcomeText).to.equal(expectedWelcomeText, VERIFICATION_ERR);
    }

    getLogoutBtnUrl(){
        let LOGOUT_BTN_URL = $(LOGOUT_BTN).getAttribute('href');
        return LOGOUT_BTN_URL;
    }

    verifyLogoutBtnShow(){
        let UrlCurrent= this.getLogoutBtnUrl();
        let expectedUrl = "http://192.168.88.218/logout";
        const VERIFICATION_ERR = '[ERR] WRONG Url';
        expect(UrlCurrent).to.equal(expectedUrl, VERIFICATION_ERR);
    }
}
module.exports = new Welcome();
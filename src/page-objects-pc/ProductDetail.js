const BTN_TOTAL_REVIEW = 'div.container > div.product-detail.col-xs-12.col-sm-12.col-md-12 > div.module-title > div.product-info > ul > li:nth-child(3) > a';
const USER_NAME_TXTBX = 'input[name=email]';
const PASSWORD_TXTBX = 'input[name=password]';
const LOGIN_BTN = '.btn-signin';
const ADD_TO_CART = '#add_to_cart';
const MSG_TXT = '#estimate_tr > div > div > div > p';
class ProductDetail{
    isClickBtnReview(){
        // $(BTN_TOTAL_REVIEW).waitForDisplayed(5000);
        browser.pause(5000);
        let clickable = $(BTN_TOTAL_REVIEW).isClickable();
        console.log(clickable);
        browser.waitUntil(() => BTN_TOTAL_REVIEW.isClickable())
        expect(clickable).to.be.true;
    }
    isClickAddToCart(){
        let isClickable = $(ADD_TO_CART).isClickable();
        browser.waitUntil(() => ADD_TO_CART.isClickable())
        expect(isClickable).to.be.true;
    }
    isNotClickAddToCart(){
        let isNotClickable = $(ADD_TO_CART).isClickable();
        browser.waitUntil(() => ADD_TO_CART.isClickable())
        expect(isNotClickable).to.be.false;
    }
    isWait(){
        browser.waitUntil(
            () => ($('#someText').getText()) === 'I am now different',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
    }
}
module.exports = new ProductDetail();

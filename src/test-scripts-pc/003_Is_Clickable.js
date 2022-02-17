let Data = require('../test-data/ProductDetail');

let ProductDetailPage = require('../page-objects-pc/ProductDetail');

describe('Is_Clickable', () => {
    before(() => {
        browser.url('/sd/'+Data.SKU_ADD_TO_CART)
    });
    it('Btn', () => {
        ProductDetailPage.isClickBtnReview();
    });
});
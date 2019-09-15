var assert = require('assert');

describe('Tests for task 1', function() {

    function start(){
        browser.url('/');
        browser.maximizeWindow();
        const button = $('h2=Zadanie 1');
        button.click();
    }

    function addProductToBasket(amount, product){
        const kubek =$("//button[@data-product-name='"+ product +"']/../following-sibling::input");
        kubek.setValue(amount);
        const dodajKubek =$("//button[@data-product-name='"+ product +"' and .='Dodaj']");
        dodajKubek.click();
    }

    function checkSummInBasket(summ){
        let summInBasket =$('.summary-quantity');
        assert.equal(summInBasket.getText(), summ);
    }

    it('Add product to the basket', function(){
        start();
        addProductToBasket('2', 'Kubek');
        checkSummInBasket('2');
        // browser.debug();
    });
    it('Remove product from the basket', function(){
        let emptyBasket =$('button=Usuń');
        emptyBasket.click();
        checkSummInBasket('0');
        // browser.debug();
    });
    it('Add more than 100 products to the basket', function(){
        addProductToBasket('50', 'Okulary');
        addProductToBasket('50', 'Kabel');
        addProductToBasket('1', 'Kamera');
        assert.equal(browser.getAlertText(), 'Łączna ilość produktów w koszyku nie może przekroczyć 100.');
        // browser.debug();
    });
});
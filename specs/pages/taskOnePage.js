var assert = require('assert');

var TaskOnePage = function(){

    this.addProductToBasket = function (amount, product){
        const kubek =$("//button[@data-product-name='"+ product +"']/../following-sibling::input");
        kubek.setValue(amount);
        const dodajKubek =$("//button[@data-product-name='"+ product +"' and .='Dodaj']");
        dodajKubek.click();
    };

    this.emptyBasket = function (){
        const emptyBasket =$('button=Usuń');
        emptyBasket.click();
    };

    this.checkSummInBasket = function (summ){
        const summInBasket =$('.summary-quantity');
        assert.equal(summInBasket.getText(), summ);
    };
};

module.exports = TaskOnePage;
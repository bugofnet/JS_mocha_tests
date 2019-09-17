var assert = require('assert');
var main = require('./pages/main');
var taskOnePage = require('./pages/taskOnePage');
var mn = new main;
var taskOP = new taskOnePage;

describe('Tests for task 1', function() {

    it('Add product to the basket', function(){
        mn.zadanieSelection('1');
        taskOP.addProductToBasket('2','Kubek');
        taskOP.checkSummInBasket('2');
    });

    it('Remove product from the basket', function(){
        taskOP.emptyBasket();
        taskOP.checkSummInBasket('0');
    });
    
    it('Add more than 100 products to the basket', function(){
        taskOP.addProductToBasket('50', 'Okulary');
        taskOP.addProductToBasket('50', 'Kabel');
        taskOP.addProductToBasket('1', 'Kamera');
        assert.equal(browser.getAlertText(), 'Łączna ilość produktów w koszyku nie może przekroczyć 100.');
        // browser.debug();
    });
});
var assert = require('assert');
var main = require('./pages/main');
var taskTwoPage = require('./pages/taskTwoPage');
var mn = new main;
var task2P = new taskTwoPage;

describe('Tests for task 2', function() {

    const productsOnPage = ["Sport", "Elektronika", "Firma i usługi"];

    it('If plaseholder text in input exists', function(){
        mn.zadanieSelection('2');
        task2P.placeHolderTextExists('Proszę wybrać kategorie');
    });

    it('All types of product are pesent on the page', function(){
        task2P.prodsOnPage().forEach(element => {
            assert.ok(productsOnPage.indexOf(element.getText())> -1);
        });
        assert.equal(task2P.prodsOnPage().length,'18');
    });
    
});
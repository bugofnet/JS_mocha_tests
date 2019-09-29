var assert = require('assert');

var TaskTwoPage = function(){

    this.placeHolderTextExists = function (text){
        const placeHolder =$("//span[@class='select2-selection__placeholder']");
        assert.equal(placeHolder.getText(), text);
    };

    this.prodsOnPage = function (){
        const  arrayProducts = $$("//div[@class='caption']/p/strong");
        return arrayProducts;
    };
};

module.exports = TaskTwoPage;
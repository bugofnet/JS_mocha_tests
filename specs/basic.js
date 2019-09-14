var assert = require('assert');

describe('webdriver.io page', function() {
    it('First task click', function(){
        browser.url('/');
        const button = $('h2=Zadanie 1');
        button.click();
        // const header = $('h1=API Docs');
        // let isExisting = header.isExisting();
        // if(isExisting){
        //     assert(isExisting);
        //    console.log('link exists.'); 
        // }
        browser.pause();
    });  
});
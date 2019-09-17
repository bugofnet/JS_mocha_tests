var Main = function(){

    this.zadanieSelection = function (taskNumber){
        browser.url('/');
        browser.maximizeWindow();
        const button = $('h2=Zadanie '+taskNumber+'');
        button.click();
    };
};

module.exports = Main;
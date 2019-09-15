// login.page.js
import Page from './page';

class MainPage extends Page {

    get taskOne() { return $('h2=Zadanie 1'); }

    open() {
        super.open('main');
    }

    taskOneClick() {
        this.taskOne.click();
    }

}

export default new MainPage();
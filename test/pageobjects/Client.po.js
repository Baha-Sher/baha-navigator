class ClientPage{
    get createModalPageButton() { return $('button.clients-add-user-dialog')};
    get firstClientRow() { return $('//span[@class="crm-navigator-table__date"]')};

    clickOnAddClientButton () {
        this.createModalPageButton.click();
    }

    clickOnFirstRow () {
        this.firstClientRow.click();
    }

    get surNameField (){ return $('input[formcontrolname="userSurname"]')};

    enterSurname (someUserSurname){
        this.surNameField.setValue(someUserSurname);
        browser.pause(1000);
    }
    get nameField (){ return $('input[formcontrolname="userName"]')};

    enterName (someUserName){
        this.nameField.setValue(someUserName);
        browser.pause(1000);
    }
    get middleNameField (){ return $('input[formcontrolname="userMiddleName"]')};

    enterMiddleName (someUserMiddleName){
        this.middleNameField.setValue(someUserMiddleName);
        browser.pause(1000);
    }

    get sexChoice (){ return $('//div[@class="mat-radio-inner-circle"][1]');}

    clickSexChoice() {
        this.sexChoice.click();
        browser.pause(1000);
    }
   get emailField (){ return $('input[type="email"]');}

   enterEmail (someUserEmail){
    this.emailField.setValue(someUserEmail);
    browser.pause(1000);
}

}

module.exports = new ClientPage
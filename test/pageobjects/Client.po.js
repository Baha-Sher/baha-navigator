class ClientPage{
    get createModalPageButton() { return $('button.clients-add-user-dialog')};
        clickOnAddClientButton () {
        this.createModalPageButton.click();
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

    get sexChoice (){ return $("//mat-radio-button//*[contains(text(),'Мужской')]/../div/div[@class='mat-radio-inner-circle']");}

    clickSexChoice() {
        this.sexChoice.click();
        browser.pause(1000);
    }
   get emailField (){ return $('input[type="email"]')};

   enterEmail (someUserEmail){
        this.emailField.setValue(someUserEmail);
        browser.pause(1000);
        };
    get phoneField (){ return $('//input[@formcontrolname="phone"]');}
    enterPhone (someUserPhone){
        this.phoneField.setValue(someUserPhone);
        browser.pause(1000);
        };
    get phoneField (){ return $('//input[@formcontrolname="phone"]');}
    enterPhone (someUserPhone){
        this.phoneField.setValue(someUserPhone);
        browser.pause(1000);
        };
    get birthdayField (){ return $('//input[@formcontrolname="birthday"]');}
    enterBirthday (someUserBirthday){
        this.birthdayField.setValue(someUserBirthday);
        browser.pause(1000);
        };
    get saveButton() { return $('//button[@name="save"]')};
    clickSaveButton () {
        this.saveButton.click();
    }
    get searchClients() { return $('//input[@name="search"]')};
    //get clickSearchClients() { return $("//button/span[contains(text(),'Искать')]")};
    get editCurrentClient() {return $('//td/*[@class="crm-navigator-table__item"]')};

    searchCurrentClients (someUserFullName) {
        this.searchClients.click();
        browser.pause(3000);
        this.searchClients.setValue(someUserFullName);
        browser.keys('Enter');
        browser.pause(3000);
        //this.clickSearchClients.click();
    }
    clickEditCurrentClient() {
        this.editCurrentClient.click();
    }

    get clickClientsOccupation() {return $('//*[@placeholder="Проф. область"]')};
    get chooseClientsOccupation() {return $('//mat-option/span[contains(text(),"Культура и искусство")]')};

    editClientOccupation(){
        this.clickClientsOccupation.click();
        this.chooseClientsOccupation.click();
    }
    get modalForScreen() {return $(browser)};//body[@class="l-body modal-open"]
    doScreenshot(){
        browser.saveScreenshot('./test/result/clientsScreenshot.png')
    }
}

module.exports = new ClientPage
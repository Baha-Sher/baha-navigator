const LoginPage = require('./../pageobjects/Login.po');
const ClientPage = require('./../pageobjects/Client.po');
const params = require('./../test_params.json');

describe('Clients page', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.doLogin(params.userCreds.login, params.userCreds.Password)
    })
    afterEach(() =>{
        browser.reloadSession()
    })

    xit('should add client', () => {   
        ClientPage.clickOnAddClientButton();
        browser.pause(2000);
        ClientPage.enterSurname("Sherbotoev");
        ClientPage.enterName("Baha");
        ClientPage.enterMiddleName("Nurlanovich");
        ClientPage.clickSexChoice();
        ClientPage.enterEmail("sher@baha.kg");
        ClientPage.enterPhone("10012345678");
        ClientPage.enterBirthday("11/11/1990");
        ClientPage.clickSaveButton();
        browser.pause(5000);


    })
    it('should Edit client', () => {
        ClientPage.searchCurrentClients("Baha Sherbotoev");
        browser.pause(3000);
        ClientPage.clickEditCurrentClient();
        browser.pause(3000);
        ClientPage.editClientOccupation();
        ClientPage.clickSaveButton();
        browser.pause(3000);
        ClientPage.doScreenshot();
        browser.pause(3000);

    })
})
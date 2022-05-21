const LoginPage = require('./../pageobjects/Login.po');
const ClientPage = require('./../pageobjects/Client.po');

describe('Clients page', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.doLogin("Admin", "Admin@Navi")
    })
    afterEach(() =>{
        browser.reloadSession()
    })

    it('should add client', () => {   
        ClientPage.clickOnAddClientButton();
        browser.pause(2000);

        ClientPage.enterSurname("Sherbotoev");
        ClientPage.enterName("Baha");
        ClientPage.enterMiddleName("Nurlanovich");
        ClientPage.clickSexChoice();
        ClientPage.enterEmail("sher@baha.kg");
        


    })
    xit('should 1st client', () => {
        ClientPage.clickOnFirstRow();
        browser.pause(5000);

    })
})
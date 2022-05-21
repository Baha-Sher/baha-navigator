const LoginPage = require('./../pageobjects/Login.po');

describe('Search Clients', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.doLogin("Admin", "Admin@Navi")
    })
    afterEach(() =>{
        browser.reloadSession()
    })

    it('Search client Urbanov', () => {   
        let addClientsName = $('button.clients-add-user-dialog')
        addClientButton.setValu();
        browser.pause(5000);
    })
    // it('should 1st client', () => {
    //     let firstClient = $('//span[@class="crm-navigator-table__date"]')
    //     firstClient.click();
    //     browser.pause(5000);

    // })
})
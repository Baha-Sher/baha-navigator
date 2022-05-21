const LoginPage = require('./../pageobjects/Login.po');
const params = require('./../test_params.json');

describe('Login test suit', () => {
    it('should login as admin', () => {
        LoginPage.open();
        LoginPage.doLogin(params.userCreds.login, params.userCreds.Password)
    })
})

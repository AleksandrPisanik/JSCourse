const { eventFire } = require('../protractor-project/js/sendEvent');
const { setText } = require('../protractor-project/js/sendKeys');

const user = require('./testData');

describe('Protractor Demo App', () => {
    const userName = element(by.id('login'));
    const password = element(by.id('password'));
    const logInForm = element(by.xpath('//form'));
    const logOut = element(by.id('logout'));
    const pageHeader = element(by.css('.panel-heading h2'));

    beforeEach(() => {
        browser.get('http://reportingportal:8080');
    })

    it('should have title', () => {
        expect(browser.getTitle()).toEqual('Aquality Tracking');
    });

    it('Should log in as admin', async () => {
        browser.executeScript(setText, userName, user.login);
        browser.executeScript(setText, password, user.password);
        browser.executeScript(eventFire, logInForm, 'submit');

        expect(pageHeader.getText()).toEqual('Select Project');
    });

    it('Should log out', () => {
        logOut.click();

        expect(userName.isPresent()).toBe(true);
    });
});
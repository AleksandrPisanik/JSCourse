const { Key } = require('selenium-webdriver');
const { locators } = require('./constants');
const BasePage = require('../../framework/basePage');

class HomePage extends BasePage {
    constructor(browser, identLoc) {
        super(browser, identLoc);
    }

    async search(text) {
        const input = await this.browser.findElement(locators.searchInput, 'Search Input');
        await input.sendKeys(text, Key.RETURN);
    }
}

module.exports = HomePage;
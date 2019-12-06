const { locators } = require('./constants');
const BasePage = require('../../framework/basePage');

class ResultPage extends BasePage {
    constructor(browser) {
        super(browser);
    }

    async getResultsCount() {
        const stringWithCount = await this.browser.findElement(locators.resultCount, 'Count of Result');
        return stringWithCount.getText();
    }
}

module.exports = ResultPage;
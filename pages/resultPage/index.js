const { locators } = require('./constants');
const BasePage = require('../../framework/basePage');
const { getResultsCountFromText, getLinks } = require('./helpers');

class ResultPage extends BasePage {
    constructor(browser, identLoc) {
        super(browser, identLoc);
    }

    async getResultsCount() {
        const stringWithCount = await this.browser.findElement(locators.resultCount, 'Count of Result');
        const text = await stringWithCount.getText();
        return getResultsCountFromText(text);
    }

    async getResultLinks() {
        const links = await this.browser.findElements(locators.resultLink, 'Result link');
        const linksArr = [];
        links.forEach((link) => linksArr.push(getLinks(link)));
        return linksArr;
    }
}

module.exports = ResultPage;
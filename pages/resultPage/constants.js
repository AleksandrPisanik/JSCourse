const { By } = require('selenium-webdriver');

const locators = {
    resultCount: By.id('resultStats')
}

module.exports = { locators };
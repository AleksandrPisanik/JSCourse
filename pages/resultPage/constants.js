const { By } = require('selenium-webdriver');

const locators = {
    resultCount: By.id('resultStats'),
    resultLink: By.xpath('//div[@class = "r"]/a[1]')
}

module.exports = { locators };
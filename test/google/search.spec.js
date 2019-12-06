const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultPage = require('../../pages/resultPage');
const { describe, it } = require('mocha');


describe('Google Search', () => {
    let browser;
    let homePage;
    let resultPage;

    before(async () => {
        browser = new Browser();
        homePage = new HomePage(browser);
        resultPage = new ResultPage(browser);
        await browser.start();
    });

    after(async () => {
        await browser.quit();
    });

    it ('should search for "webdriver"', async () => {
        await homePage.search('webdriver');
        const count = await resultPage.getResultsCount();
        console.log(count);
    })
});  
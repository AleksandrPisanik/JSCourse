const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultPage = require('../../pages/resultPage');
const { describe, it } = require('mocha');
const { assert } = require('chai');
const { By } = require('selenium-webdriver');


describe('Google Search', () => {
    let browser;
    let homePage;
    let resultPage;

    before(async () => {
        browser = new Browser();
        homePage = new HomePage(browser, By.id('lga'));
        resultPage = new ResultPage(browser, By.id('resultStats'));
        await browser.start();
    });

    after(async () => {
        await browser.quit();
    });

    it ('should search for "webdriver"', async () => {
        assert.isTrue(await homePage.isOpened(), 'Home Page not opened');
        await homePage.search('webdriver');
        assert.isTrue(await resultPage.isOpened(), 'Result Page not opened');
    });

    it ('should find more than 100000 results', async () => {
        const count = await resultPage.getResultsCount();
        assert.isTrue(count > 100000, 'Found less than 100000 results');   
    });

    it ('should show "https://www.seleniumhq.org/projects/webdriver/" link on the first page', async () => {
        const explink = 'https://www.seleniumhq.org/projects/webdriver/';
        const actions = await resultPage.getResultLinks();
        const links = await Promise.all(actions);
        assert.isTrue(links.includes(explink), `Link "${link}" not shown on the first page`);
    });
});  
class BasePage {
    constructor(browser, identLoc) {
        this.browser = browser;
        this.identLoc = identLoc;
        this.isOpened = async () => {
            const element = await this.browser.findElement(this.identLoc, 'Page Loc');
            return element.isDisplayed();
        }
    }
}

module.exports = BasePage;
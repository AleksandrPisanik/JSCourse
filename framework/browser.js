require('chromedriver');
const { Builder, Capabilities } = require('selenium-webdriver');
const config = require('../config.json');
const logger = require('../test/utils/Log.util');

class Browser {
    constructor() {
        this.driver;
    }

    async start() {
        const capabilities = Capabilities.chrome();
        capabilities.set('chromeOptions', {
            'args':['--disable-plugins']
        })
        this.driver = await new Builder().forBrowser('chrome').build();
        try {
            await this.driver.get(config.startURL);
            await this.driver.manage().setTimeouts({
                implicit: config.implicit,
                pageLoading: config.pageLoading,
                scriptExecuting: config.scriptExecuting
            });
            logger.info(`Browser is started`);
        } catch (error) {
            logger.error(`Can not start Browser: ${error}`);
        }
    }

    async quit() {
        return new Promise((resolve, reject) => {
            try{
                setTimeout( async () => {
                    await this.driver.quit();
                    resolve();
                }, 100)
            } catch (error) {
                logger.error(`Error during closing the browser: ${error}`);
                reject();
            }
        })
    }

    async findElement(by, name) {
        return this.driver.findElement(by).catch((error) => {
            logger.warning(`Can not find element ${name}: ${error}`);
        })
    }

    async findElements(by, name) {
        return this.driver.findElements(by).catch((error) => {
            logger.warning(`Can not find element ${name}: ${error}`);
        })
    }
}

module.exports = Browser;
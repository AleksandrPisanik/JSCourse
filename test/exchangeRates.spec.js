const { describe, it } = require('mocha');
const dateTime = require('./utils/dateTime.util');
const ExchangeRate = require('../pages/exchangerate');

const baseCurrency = 'USD';
const currency = 'RUB';

function checkRate(leftRate, rightRate) {
    if(leftRate > rightRate) {
        return `-${rightRate}`;
    } else {
        if(leftRate < rightRate) {
            return `+${rightRate}`;
        } else {
            return `${rightRate}`;
        }
    }
}

describe('I want to see if rate on my currency is growing compare to 10 days before today', () => {
    it(`${currency}s per 1 ${baseCurrency}`, async () => {
        const dates = dateTime.getSameLastDays(10);
        const excangeRate = new ExchangeRate();
        let leftRate = await excangeRate.getExchangeRate(dates[0], baseCurrency, currency);
        const actions = [];
        dates.forEach((date) => {
            actions.push(excangeRate.getExchangeRate(date, baseCurrency, currency));
        });
        const rates = await Promise.all(actions);
        const checkedRates = [];
        rates.forEach((rate) => {
            checkedRates.push(checkRate(leftRate, rate));
            leftRate = rate;
        });
        console.log(checkedRates);
    });
});
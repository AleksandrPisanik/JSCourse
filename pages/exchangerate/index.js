const { getRate } = require('./helpers');

class ExchangeRate {
    async getExchangeRate(date, baseCurrency = 'USD', currency = 'RUB') {
        const rate = await getRate(date, baseCurrency, currency);
        return rate;
    }
}

module.exports = ExchangeRate;
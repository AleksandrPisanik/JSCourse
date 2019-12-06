const chai = require('chai');
const chaiHttp = require('chai-http');
const constants = require('./constants');

chai.use(chaiHttp);

async function getResponse(date, currency) {
    const request = chai.request(`${constants.apiServer}`);
    return request.get(`/${date}?base=${currency}`);
};

function convertDateToString (fullDate) {
    const currentDate = new Date(fullDate);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    return `${year}-${month}-${date}`;    
}

async function getRate(date, baseCurrency, currency) {
    const currentDate = convertDateToString(date);
    const response = await getResponse(currentDate, baseCurrency);
    const rate = response.body.rates[`${currency}`];
    return rate;
};

module.exports = {
    getRate
}
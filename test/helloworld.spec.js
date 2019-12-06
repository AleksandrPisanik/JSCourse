const { describe, it } = require('mocha');
const { assert } = require('chai');
const logger = require('./utils/Log.util');
const dateTime = require('./utils/dateTime.util');

describe('Hello World TestSuite', () => {
  it('should write "Hello World"', () => {
      logger.info('Hello World');
  });
});

describe('Check function today()', () => {
    it('should return "not equal" if dates not equal', () => {
        const actDate = dateTime.today();
        const expDate = new Date();
        assert.equal(actDate.getTime(), expDate.getTime(), 'not equal');
    });
});

describe('Check function setYears()', () => {
    it('should return "was not change" if year was not change', () => {
        const date = new Date();
        const actDate = dateTime.setYear(date, 2018);
        date.setFullYear(2018);
        const expDate = date;
        assert.equal(actDate.getTime(), expDate.getTime(), 'was not change');
    });
});

describe('Check function daysDifferense()', () => {
    it('should return "differense is wrong" if year was not change', () => {
        const date1 = new Date();
        const date2 = new Date();
        date2.setFullYear(2020);
        const expDiff = date2 - date1;
        const actDiff = dateTime.daysDifference(date2, date1);
        assert.equal(actDiff, expDiff, 'differense is wrong');
    });
});
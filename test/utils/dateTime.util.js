const logger = require('../utils/Log.util');

class DateTimeUtil {
    today() {
        return new Date();
    }

    setYear(date, year) {
        const newDate = new Date(date);
        newDate.setFullYear(year);
        return newDate;
    }

    daysDifference(dateLeft, dateRight) {
        return dateLeft - dateRight;
    }
}

module.exports = new DateTimeUtil();
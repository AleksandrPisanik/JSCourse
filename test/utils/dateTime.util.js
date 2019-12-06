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

    getDateSameDaysAgo(daysCount) {
        const currentDate = new Date();
        const pastDate = new Date();
        pastDate.setDate(currentDate.getDate() - daysCount);
        return pastDate;
    }

    getDateTenDaysAgo() {
        return this.getDateSameDaysAgo(10);
    }

    getSameLastDays(daysCount) {
        const dates = [];
        for(let count = daysCount - 1; count >= 0; count--) {
            dates.push(this.getDateSameDaysAgo(count));
        }
        return dates;
    }
}

module.exports = new DateTimeUtil();
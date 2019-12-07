const REGEX_TIME_RES = /(\(.*\))/;
const NUMBERS_SYSTEM = 10;

function getNumberWithoutSeparators(numberWithSeparators) {
    const numbers = numberWithSeparators.match(/\d/g);
    return numbers.join('');
}

function getResultsCountFromText(text) {
    const textWithoutTime = text.replace(REGEX_TIME_RES, '');
    const count = getNumberWithoutSeparators(textWithoutTime);
    return parseInt(count, NUMBERS_SYSTEM);
}

async function getLinks(element) {
    const link = await element.getAttribute('href');
    return link;
}

module.exports = {
    getNumberWithoutSeparators,
    getResultsCountFromText,
    getLinks
}
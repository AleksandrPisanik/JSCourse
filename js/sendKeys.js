function setText(element, text) {
    element.value = text;
    var evObj = document.createEvent('Events');
    evObj.initEvent('input', true, false);
    element.dispatchEvent(evObj);
}

module.exports = { setText }
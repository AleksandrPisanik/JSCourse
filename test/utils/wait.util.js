const logger = require('./Log.util');

const doWait = (action, expectedValue, interval) => {
    return new Promise((resolve, reject) => {
        const actValue = action();
        if(actValue === expectedValue){
            setTimeout(() => resolve(), interval);
        }
        setTimeout(() => reject(actValue), interval);
    })    
}

const retrier = (action, expectedValue, maxCount, interval, count) => {
    count++;
    logger.info(`[${count}] Wait for true ${expectedValue}`);
    return doWait(action, expectedValue, interval).then(() => {
        logger.warning('Was able to reach expected condition!');
        return true; 
        }, (actValue) => {
        if(maxCount <= count) {
            logger.warning(`Was not able to reach expected condition! Last action = ${action()}`);
            return false;
        } else {
            return retrier(action, expectedValue, maxCount, interval, count);
        }
    })
}

class Wait {
    forTrue(action, maxCount, interval, count = 0) {
        return retrier(action, true, maxCount, interval, count);
    }

    forFalse(action, maxCount, interval, count = 0) {
        return retrier(action, false, maxCount, interval, count);
    }
}

module.exports = Wait;
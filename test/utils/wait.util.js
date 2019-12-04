const logger = require('./Log.util');

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        const actValue = action();
        if(actValue === expectedValue){
            setTimeout(() => resolve(), interval);
        }
        setTimeout(() => reject(actValue), interval);
    })    
}

const retrier = (exp, action, maxCount, interval, count = 0, expectedValue, ifRes, ifRej) => {
    count++;
    logger.info(`[${count}] Wait for ${exp}`);
    return doWait(action, interval, expectedValue).then(() => ifRes(maxCount, count), () => ifRej(maxCount, count));
}

class Wait {
    forTrue(action, maxCount, interval, count = 0, expectedValue) {
        count++;
        logger.info(`[${count}] Wait for true`);
        return doWait(action, interval, expectedValue).then(() => {
            logger.warning('Was able to reach expected condition!');
            return true; 
        }, () => {
        if(maxCount <= count) {
            logger.warning(`Was not able to reach expected condition! Action = ${action()}`)
            return false;
        } else {
            return this.forTrue(action, maxCount, interval, count, expectedValue);
            }
        })
    }

    forFalse(action, maxCount, interval, count = 0, expectedValue) {
        count++;
        logger.info(`[${count}] Wait for false`);
        return doWait(action, interval, expectedValue).then(() => {
            if(maxCount <= count) {
                logger.warning(`Was not able to reach expected condition! Action = ${action()}`)
                return false;
            } else {
                return this.forFalse(action, maxCount, interval, count, expectedValue);
            }
        }, () => {
            logger.warning('Was able to reach expected condition!');
            return true; 
        })
    }
}

module.exports = Wait;
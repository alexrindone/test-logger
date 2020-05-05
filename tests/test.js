const logger = require('../logger');
const assert = require('assert');
const Log = new logger();
Log.logDirectory = './tests/logs';

let infoTest = Log.info('Connecting to MySQL');
assert(typeof infoTest === "string");
assert(infoTest.indexOf('INFO') > -1);
console.log("Check Passed");

let errorTest = Log.error('Connecting to MySQL');
assert(typeof errorTest === "string");
assert(errorTest.indexOf('ERROR') > -1);
console.log("Check Passed");

try {
    assert(errorTest === "object");
} catch(e) {
    // using the error log method within the test file
    Log.error('Test is not an object');
}
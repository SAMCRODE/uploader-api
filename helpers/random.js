const crypto = require('crypto');

/**
 * create a random hexadecimal string with length equals to 2*len
 * @param {Number} len number of bytes
 */
function createRandomHexString(len = 20) {
  return crypto.randomBytes(len).toString('hex');
}

module.exports = {
  createRandomHexString,
};

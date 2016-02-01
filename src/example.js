var request = require('request');

// your code here

var simplePromise = function (bool) {
    return new Promise(function (resolve, reject) {
        if ( bool ) {
            resolve('OK');
        } else {
            reject('BAD');
        }
    }).then(function(result) {
        return result;
    }).catch(function(error) {
        return error
    })
};

var add10Promise = function (num) {
    return new Promise(function(resolve, reject) {
        if ( num ) {
            resolve(num + 10);
        } else {
            reject(0 + 10)
        }
    }).then(function(result) {
        return result;
    }).catch(function(err) {
        return err;
    });
}

var reject = function (num) {
    return new Promise(function(resolve, rej) {
        rej(num)
    })
}

var sum50 = function() {
    add10Promise
}

module.exports = {
  simplePromise: simplePromise,
  add10Promise: add10Promise,
  reject: reject,
  sum50: sum50
};

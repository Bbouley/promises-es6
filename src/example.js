var request = require('request');
var promise = require('bluebird');
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
    return new Promise(function(resolve, reject) {
        var num = add10Promise().then(function(result) {
            return(add10Promise(result));
        }).then(function(result) {
            return(add10Promise(result));
        }).then(function(result) {
            return(add10Promise(result));
        }).then(function(result) {
            return(add10Promise(result));
        }).catch(function(err) {
            return err;
        })
        if (num === 50) {
            resolve(num);
        } else {
            reject(num);
        };
    }).then(function(result) {
        return result;
    }).catch(function(err) {
        return err;
    })
}

new Promise(function(resolve, reject) {
  console.log('A promise.');
  throw 'Boom!';
});

module.exports = {
  simplePromise: simplePromise,
  add10Promise: add10Promise,
  reject: reject,
  sum50: sum50
};

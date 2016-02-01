var Example = require('../src/example');

describe('Example', function () {
  describe('#simplePromise', function () {
    it('returns OK when given true', function (done) {
      Example.simplePromise(true).then(function (result) {
        expect(result).toEqual('OK');
        done();
      });
    });

    it('returns BAD when given false', function (done) {
      Example.simplePromise(false).then(function (result) {
        expect(result).toEqual('BAD');
        done();
      });
    });
  });

  describe('#add10Promise', function () {
    it('adds 10 to the given number', function (done) {
      Example.add10Promise(15).then(function (result) {
        expect(result).toEqual(25);
        done();
      });
    });

    it('adds 10 to 0 when no number is given', function (done) {
      Example.add10Promise().then(function (result) {
        expect(result).toEqual(10);
        done();
      });
    });
  });

  describe('#reject', function () {
    it('rejects in a promise, returning whatever was given to it', function (done) {
      Example.
        reject(10).
        catch(function (result) {
          expect(result).toEqual(10);
          done();
        });
    });
  });

  describe('#sum50', function () {
    xit('returns the number 50', function (done) {
      Example.sum50().then(function (result) {
        expect(result).toEqual(50);
        done();
      })
    });
  });
});

/// <reference path="../typings/mocha/mocha.d.ts" />
var interfacce_1 = require('../interfacce');
describe('Rubrica', function () {
    var subject;
    var addressBook;
    beforeEach(function () {
        subject = new interfacce_1["default"]();
    });
    describe('#addressBookPopulate', function () {
        it('should populate addressBook', function () {
            addressBook = subject.addressBookPopulate();
            if (addressBook.length !== 2) {
                throw new Error('Population FAILED');
            }
        });
    });
    describe('#stampaLength', function () {
        it('should show the length of the addressBook', function () {
            var result = subject.stampaLength(addressBook);
            if (result !== 2) {
                throw new Error('Expected 2 but was ' + result);
            }
        });
    });
});

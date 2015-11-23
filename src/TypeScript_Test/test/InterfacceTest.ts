/// <reference path="../typings/mocha/mocha.d.ts" />
import Rubrica from '../interfacce';

describe('Rubrica', () => {
    var subject : Rubrica;
    var addressBook;

    beforeEach(function () {
        subject = new Rubrica();
    });

    describe('#addressBookPopulate', () => {
    	it('should populate addressBook', () => {
    		addressBook = subject.addressBookPopulate();
    		if(addressBook.length !== 2){
    			throw new Error('Population FAILED');
    		} 
    	})
    });

    describe('#stampaLength', () => {
        it('should show the length of the addressBook', () => {
            var result : number = subject.stampaLength(addressBook);
            if (result !== 2) {
                throw new Error('Expected 2 but was ' + result);
            }
        });
    });
});
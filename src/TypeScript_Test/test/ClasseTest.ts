/// <reference path="../typings/mocha/mocha.d.ts" />
import Student from '../classe_copia';

describe('Studente', () => {
    var subject : Student;
    var student = new Student("Mario", "Rossi");

    beforeEach(function () {
        subject = new Student("Mario", "Rossi");
    });

    describe('#ShowName', () => {
    	it('should return fullName', () => {
    		var fullname = subject.ShowName(student);
    		if(fullname.length !== 11){
    			throw new Error('Error ShowName()');
    		}
    	});
    });
    
    describe('#createStudent', () => {
    	it('should return createStudent', () => {
    		var result = subject.createStudent(student);
    		if(result.length !== 11){
    			throw new Error('Error createStudent');
    		}
    	});
    });
});


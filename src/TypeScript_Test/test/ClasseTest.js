/// <reference path="../typings/mocha/mocha.d.ts" />
var classe_copia_1 = require('../classe_copia');
describe('Studente', function () {
    var subject;
    var student = new classe_copia_1["default"]("Mario", "Rossi");
    
    beforeEach(function () {
        subject = new classe_copia_1["default"]("Mario", "Rossi");
    });
    describe('#ShowName', function () {
        it('should return fullName', function () {
            var fullname = subject.ShowName(student);
            if (fullname.length !== 11) {
                throw new Error('Error ShowName()');
            }
        });
    });

    describe('#createStudent', function () {
        it('should return createStudent', function () {
            var result = subject.createStudent(student);
            if(result == null){
                throw new Error('Error createStudent');
            }
        });
    });
    
});

var Rubrica = (function () {
    function Rubrica() {
    }
    Rubrica.prototype.addressBookPopulate = function () {
        var addressBook = [];
        var person = {
            name: "gigi",
            surname: "la cremeria",
            contact: {
                phone: 12345,
                email: "gigi@lacremeria.it"
            }
        };
        var person2 = {
            name: "gigi",
            surname: "la funivia",
            contact: {
                phone: 67891,
                email: "gigi@lafunivia.it"
            }
        };
        addressBook.push(person);
        addressBook.push(person2);
        return addressBook;
    };
    Rubrica.prototype.stampa = function (addressBook) {
        var contact = "";
        var length = addressBook.length;
        for (var i = 0; i < length; i++) {
            var personArray = addressBook.pop();
            contact = contact.concat(personArray.name, " ", personArray.surname, ", ", personArray.contact.phone.toString(), ", ", personArray.contact.email, "<br>");
        }
        return contact;
    };
    Rubrica.prototype.stampaLength = function (addressBook) {
        return addressBook.length;
    };
    return Rubrica;
})();
exports.__esModule = true;
exports["default"] = Rubrica;

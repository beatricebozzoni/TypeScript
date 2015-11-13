var addressBook = [];
function addressBookPopulate() {
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
}
function stampa() {
    var contact = "";
    var length = addressBook.length;
    for (var i = 0; i < length; i++) {
        var personArray = addressBook.pop();
        contact = contact.concat(personArray.name, " ", personArray.surname, ", ", personArray.contact.phone.toString(), ", ", personArray.contact.email, "<br>");
        document.getElementById("interfacce").innerHTML += contact;
    }
}
window.onload = function () {
    addressBookPopulate();
    stampa();
};
//# sourceMappingURL=prova2.js.map
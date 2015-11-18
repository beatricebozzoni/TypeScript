interface Contact {
    phone: number;
    email: string;
}

interface Person {
    name: string;
    surname: string;
    contact: Contact;
}

var addressBook: Person[] = [];

function addressBookPopulate() : void {
    var person = {
        name: "gigi",
        surname: "la cremeria",
        contact: {
            phone: 12345,
            email: "gigi@lacremeria.it"
        }
    }

    var person2 = {
        name: "gigi",
        surname: "la funivia",
        contact: {
            phone: 67891,
            email: "gigi@lafunivia.it"
        }
    }
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

window.onload = () => {
    addressBookPopulate();
    stampa();
    calcoloArea();
    startClasse();
}

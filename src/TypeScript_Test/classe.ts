﻿interface Person2 {
    nome: string;
    cognome: string;
}

class Student {
    fullname: string;
    element: HTMLElement;

    //Adding public varName: Type to a constructor automatically adds a typed variable into the class 
    //without having to explicitly write the code as with normal and intersect.
    constructor(public nome: string, public cognome: string, element: HTMLElement) {
        this.fullname = nome + " " + cognome;
        this.element = element;
        this.element.innerHTML = this.fullname;
    }
}


function createStudent(person: Person2) {
    return person.nome + " " + person.cognome;
}

function showAlert(message: string = "Hello", description?: string): void {
    if (description != null) {
        alert(message + ": " + description);
    } else {
        alert(message);
    }
}

function startClasse() {
    var el = document.getElementById('prova');
    this.fullname = createStudent(new Student("Mario", "Rossi", el));
    showAlert(this.message, this.description = "Pippo!");
}
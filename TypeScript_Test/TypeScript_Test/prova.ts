class Student {
    fullname: string;
    element: HTMLElement;

    constructor(public nome: string, public cognome: string, element: HTMLElement) {
        this.fullname = nome + " " + cognome;
        this.element = element;
        this.element.innerHTML = this.fullname;
    }
}

interface Person2 {
    nome: string;
    cognome: string;
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

window.onload = () => {
    var el = document.getElementById('prova');
    this.fullname = createStudent(new Student("Mario", "Rossi", el));
    showAlert(this.message, this.description = "Pippo!");
};